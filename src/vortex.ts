import { utils, BigNumber, Signer, Contract } from "ethers"
import { Framework } from "@superfluid-finance/sdk-core"
import Operation from "@superfluid-finance/sdk-core/dist/module/Operation"

type Config = {
  entities: { [key: string]: string }
  agreements: { [key: string]: string },
  host: string,
}

export enum CallCode {
  ERC20_APPROVE = "ERC20_APPROVE",
  ERC20_TRANSFER_FROM = "ERC20_TRANSFER_FROM",
  SUPERTOKEN_UPGRADE = "SUPERTOKEN_UPGRADE",
  SUPERTOKEN_DOWNGRADE = "SUPERTOKEN_DOWNGRADE",
  SUPERFLUID_CALL_AGREEMENT = "SUPERFLUID_CALL_AGREEMENT",
  CALL_APP_ACTION = "CALL_APP_ACTION"
}

export enum Method {
  CREATE_FLOW = 'createFlow',
  UPDATE_FLOW = 'updateFlow',
  DELETE_FLOW = 'deleteFlow',
  CREATE_INDEX = 'createIndex',
  UPDATE_INDEX = 'updateIndex',
  DISTRIBUTE = 'distribute',
  UPDATE_SUBSCRIPTION = 'updateSubscription',
  APPROVE_SUBSCRIPTION = 'approveSubscription',
  REVOKE_SUBSCRIPTION = 'revokeSubscription',
  DELETE_SUBSCRIPTION = 'deleteSubscription',
  CLAIM = 'claim'
}

const timeUnits: { [key: string]: number } = {
  s: 1,
  m: 60,
  h: 3600,
  d: 86400,
  w: 604800,
  y: 31536000,
}

const resolveParam = (param: string, type: string, config: Config): any => {
  if (/\[\d*\]$/g.test(type)) {
    if (!param.startsWith("[")) {
      throw new Error(`Parameter ${type} should be an array, ${param} given.`);
    }
    // Converts something like "[[0x00,0x01],[0x03]]" to [["0x00","0x01"],["0x03"]]
    return JSON.parse(
      param
        .replace(/\[(?!\[)/g, '["')
        .replace(/(?<!\]),/g, '",')
        .replace(/,(?!\[)/g, ',"')
        .replace(/(?<!\])\]/g, '"]')
    ).map((param: string[]) => resolveParam(JSON.stringify(param), type.slice(0, type.lastIndexOf("[")), config));
  }
  if (type === "address") {
    return address(param, config)
  }
  if (/^u?int(\d)*$/.test(type)) {
    return uint(param);
  }
  if (type === "bool") {
    return boolean(param)
  }
  if (type === "bytes") {
    return bytes(param)
  }
  return param;
}

const calldata = (signature: string, params: string[]) => {
  return (new utils.Interface([`function ${signature} external`])).encodeFunctionData(signature.split("(")[0], params)
}

const callAgreement = (agreement: string) => (method: string, args: string[], userData: string) => {
  return calldata("callAgreement(address,bytes,bytes)", [
    agreement,
    calldata(method, args),
    userData
  ])
}

const toDecimals = (amount: number | string, decimals = 18): BigNumber => {
  const [integer, decimal] = String(amount).split(".");
  return BigNumber.from((integer !== "0" ? integer : "") + (decimal || "").padEnd(decimals, "0") || "0");
};

function address(address: string, { entities }: Config): string {
  if (utils.isAddress(address)) {
    return address
  } else if (address in entities) {
    return entities[address]
  }
  throw Error("Unrecognized address " + address)
}

function uint(uint: string): string {
  const [, amount, decimals = "0", unit = "s", inverse = "s"] = String(uint).match(/^(\d*(?:\.\d*)?)(?:e(\d+))?([s|m|h|d|w|y])?(?:\/([s|m|h|d|w|y]))?$/)!
  return toDecimals(amount, parseInt(decimals)).mul(timeUnits[unit]).div(timeUnits[inverse]).toString()
}

function bytes(bytes: string): string {
  if (bytes.startsWith("0x")) {
    return bytes
  }
  return utils.hexlify(utils.toUtf8Bytes(bytes))
}

function boolean(bool: string) {
  if (bool === "true") {
    return true
  }
  if (bool === "false") {
    return false
  }
  throw new Error(`Malformed boolean, it should be "true" or "false"`)
}



function _vortex(input: string, config: Config): [Operation[], { token: string, receiver: string, amount: string }[]] {
  const _args = (args: string[], types: string[]) => {
    return args.map((arg, i) => types[i] ? resolveParam(arg, types[i], config) : arg)
  }

  const preapprovals: { token: string; receiver: string, amount: string }[] = []

  const commands = input
    .split("\n")
    .map((command) => command.split("#")[0].split("//")[0])
    .map((command) => command.trim())
    .filter((command) => !!command)
    .map(command => command.replace(/"([^"]*)"/g, (_, s) => s.replace(/ /g, '"')).split(" ").map((s) => s.replace(/"/g, " ")))
    .filter(command => {
      const [commandName, subCommand, ...args] = command
      if (commandName === "token" && subCommand === "pre-approve") {
        const [token, receiver, amount] = _args(args, ['address', 'address', 'uint256'])
        preapprovals.push({ token, receiver, amount })
        return false
      }
      return true
    })
  const actions = commands.map((command) => {
    const [commandName, ...args] = command
    const ctx = "0x"
    const callCFA = callAgreement(config.agreements.CFA)
    const callIDA = callAgreement(config.agreements.IDA)
    switch (commandName) {
      case "token": {
        const [subCommand, ...rest] = args
        switch (subCommand) {
          case "approve": {
            const [token, spender, amount] = _args(rest, ['address', 'address', 'uint256'])
            return {
              type: CallCode.ERC20_APPROVE,
              to: token,
              data: calldata("approve(address,uint256)", [spender, amount])
            }
          }
          case "transfer-from": {
            const [token, sender, recipient, amount] = _args(rest, ['address', 'address', 'address', 'uint256'])
            return {
              type: CallCode.ERC20_TRANSFER_FROM,
              to: token,
              data: calldata('transferFrom(address,address,uint256)', [sender, recipient, amount])
            }
          }
          case "upgrade": {
            const [token, amount] = _args(rest, ['address', 'uint256'])
            return {
              type: CallCode.SUPERTOKEN_UPGRADE,
              to: token,
              data: calldata("upgrade(uint256)", [amount])
            }
          }
          case "downgrade": {
            const [token, amount] = _args(rest, ['address', 'uint256'])
            return {
              type: CallCode.SUPERTOKEN_DOWNGRADE,
              to: token,
              data: calldata("downgrade(uint256)", [amount])
            }
          }
          default:
            throw new Error(`Unrecognized sub-command: ${commandName} ${subCommand}`);
        }
      }
      case "flow": {
        const [subCommand, ...rest] = args
        switch (subCommand) {
          case "create": {
            const [token, receiver, flowRate, userData = "0x"] = _args(rest, ['address', 'address', 'int96', 'bytes'])
            return {
              type: CallCode.SUPERFLUID_CALL_AGREEMENT,
              to: config.host,
              data: callCFA(
                "createFlow(address,address,int96,bytes)",
                [
                  token,
                  receiver,
                  flowRate,
                  ctx
                ],
                userData
              )
            }
          }
          case "update": {
            const [token, receiver, flowRate, userData = "0x"] = _args(rest, ['address', 'address', 'int96', 'bytes'])
            return {
              type: CallCode.SUPERFLUID_CALL_AGREEMENT,
              to: config.host,
              data: callCFA(
                "updateFlow(address,address,int96,bytes)",
                [
                  token,
                  receiver,
                  flowRate,
                  ctx
                ],
                userData
              )
            }
          }
          case "delete": {
            const [token, receiver, sender, userData = "0x"] = _args(rest, ['address', 'address', 'address', 'bytes'])
            return {
              type: CallCode.SUPERFLUID_CALL_AGREEMENT,
              to: config.host,
              data: callCFA(
                "deleteFlow(address,address,address,bytes)",
                [
                  token,
                  sender,
                  receiver,
                  ctx
                ],
                userData
              )
            }
          }
          default:
            throw new Error(`Unrecognized sub-command: ${commandName} ${subCommand}`);
        }
      }
      case "index": {
        const [subCommand, ...rest] = args
        switch (subCommand) {
          case "create": {
            const [token, indexId, userData = "0x"] = _args(rest, ['address', 'uint32', 'bytes'])
            return {
              type: CallCode.SUPERFLUID_CALL_AGREEMENT,
              to: config.host,
              data: callIDA("createIndex(address,uint32,bytes)", [
                token,
                indexId,
                ctx
              ], userData)
            }
          }
          case "update": {
            const [token, indexId, indexValue, userData = "0x"] = _args(rest, ['address', 'uint32', 'uint128', 'bytes'])
            return {
              type: CallCode.SUPERFLUID_CALL_AGREEMENT,
              to: config.agreements.IDA,
              data: callIDA("updateIndex(address,uint32,uint128,bytes)", [
                token,
                indexId,
                indexValue,
                ctx
              ], userData)
            }
          }
          default:
            throw new Error(`Unrecognized sub-command: ${commandName} ${subCommand}`);
        }
      }
      case "distribute": {
        const [token, indexId, amount, userData = "0x"] = _args(args, ['address', 'uint32', 'uint256', 'bytes'])
        return {
          type: CallCode.SUPERFLUID_CALL_AGREEMENT,
          to: config.agreements.IDA,
          data: callIDA("distribute(address,uint32,uint256,bytes)", [
            token,
            indexId,
            amount,
            ctx
          ], userData)
        }
      }
      case "subscription": {
        const [subCommand, ...rest] = args
        switch (subCommand) {
          case "approve": {
            const [token, indexId, publisher, userData = "0x"] = _args(rest, ['address', 'uint32', 'address', 'bytes'])
            return {
              type: CallCode.SUPERFLUID_CALL_AGREEMENT,
              to: config.agreements.IDA,
              data: callIDA("approveSubscription(address,address,uint32,bytes)", [
                token,
                publisher,
                indexId,
                ctx
              ], userData)
            }
          }
          case "revoke": {
            const [token, indexId, publisher, userData = "0x"] = _args(rest, ['address', '32', 'address', 'bytes'])
            return {
              type: CallCode.SUPERFLUID_CALL_AGREEMENT,
              to: config.agreements.IDA,
              data: callIDA("revokeSubscription(address,address,uint32,bytes)", [
                token,
                publisher,
                indexId,
                ctx
              ], userData)
            }
          }
          case "update": {
            const [token, indexId, subscriber, units, userData = "0x"] = _args(rest, ['address', 'uint32', 'address', 'uint128', 'bytes'])
            return {
              type: CallCode.SUPERFLUID_CALL_AGREEMENT,
              to: config.agreements.IDA,
              data: callIDA("updateSubscription(address,uint32,address,uint128,bytes)", [
                token,
                indexId,
                subscriber,
                units,
                ctx
              ], userData)
            }
          }
          case "delete": {
            const [token, indexId, subscriber, publisher, userData = "0x"] = _args(rest, ['address', 'uint', 'address', 'address', 'bytes'])
            return {
              type: CallCode.SUPERFLUID_CALL_AGREEMENT,
              to: config.agreements.IDA,
              data: callIDA("deleteSubscription(address,address,uint32,address,bytes)", [
                token,
                publisher,
                indexId,
                subscriber,
                ctx
              ], userData)
            }
          }
          default:
            throw new Error(`Unrecognized sub-command: ${commandName} ${subCommand}`);
        }
      }
      case "claim": {
        const [token, indexId, subscriber, publisher, userData = "0x"] = _args(args, ['address', 'uint32', 'address', 'address', 'bytes'])
        return {
          type: CallCode.SUPERFLUID_CALL_AGREEMENT,
          to: config.agreements.IDA,
          data: callIDA("claim(address,address,uint32,address,bytes)", [
            token,
            publisher,
            indexId,
            subscriber,
            ctx
          ], userData)
        }
      }
      case "call": {
        const [superApp, action, ...params] = _args(args, ['address'])
        const paramTypes = action.split("(")[1].split(")")[0].split(",").map(resolveParam)
        return {
          type: CallCode.CALL_APP_ACTION,
          to: superApp,
          data: calldata(action, _args(params, paramTypes))
        }
      }
      default:
        throw new Error("Unrecognized command: " + commandName);
    }
  })
  return [
    actions.map(({ to, data, type }) => new Operation(Promise.resolve({ to, data, gasLimit: BigNumber.from(40000000) }), type)),
    preapprovals
  ]
}


const preApprove = async (sf: Framework, signer: Signer, preapprovals: { token: string, receiver: string, amount: string }[]) => {
  await Promise.all(preapprovals.map(async ({ token, receiver, amount }) => {
    await (await new Contract(token, ["function approve(address,uint256) external"], signer).approve(receiver, amount, {
          gasLimit: 100_000
        })).wait()
  }))
}

export default function vortex(sf: Framework) {
  return (
    strings: TemplateStringsArray,
    ...keys: string[]
  ): { exec: any } => {
    return {
      exec: async (signer: Signer) => {
        const config = {
          entities: await sf.query.listAllSuperTokens({}).then(res => res.data.reduce((acc, obj) => ({ ...acc, [`token:${obj.symbol}`]: obj.id, [`token:${obj.symbol.slice(0, -1)}`]: obj.underlyingAddress }), {
            "agreement:CFA": sf.settings.config.cfaV1Address,
            "agreement:IDA": sf.settings.config.idaV1Address,
            "superfluid:host": sf.settings.config.hostAddress,
          })),
          agreements: {
            CFA: sf.settings.config.cfaV1Address,
            IDA: sf.settings.config.idaV1Address,
          },
          host: sf.settings.config.hostAddress,
        }
        console.log("Loading config", config)
        const input = strings[0] + keys.map((key, i) => key + strings[i + 1]).join("");
        const [calls, preapprovals] = _vortex(input, config)
        await preApprove(sf, signer, preapprovals)
        return (await sf.batchCall(calls).exec(signer)).wait()
      }
    }
  }
}
