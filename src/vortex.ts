import { utils, BigNumber } from "ethers"
import { Framework } from "@superfluid-finance/sdk-core"
import Operation from "@superfluid-finance/sdk-core/dist/module/Operation"

type Config = {
  entities: { [key: string]: string }
  agreements: { [key: string]: string }
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



function _vortex(input: string, config: Config): Operation[] {
  const _args = (args: string[], types: string[]) => {
    return args.map((arg, i) => types[i] ? resolveParam(arg, types[i], config) : arg)
  }

  const commands = input
    .split("\n")
    .map((command) => command.split("#")[0].split("//")[0])
    .map((command) => command.trim())
    .filter((command) => !!command);

  const actions = commands.map((command) => {
    const [commandName, ...args] = command
      .replace(/"([^"]*)"/g, (_, s) => s.replace(/ /g, '"'))
      .split(" ")
      .map((s) => s.replace(/"/g, " "));
    const ctx = "0x"
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
            const [token, receiver, flowRate] = _args(rest, ['address', 'address', 'int96'])
            return {
              type: CallCode.SUPERFLUID_CALL_AGREEMENT,
              to: config.agreements.CFA,
              data: calldata("createFlow(address,address,int96,bytes)", [
                token,
                receiver,
                flowRate,
                ctx
              ])
            }
          }
          case "update": {
            const [token, receiver, flowRate] = _args(rest, ['address', 'address', 'int96'])
            return {
              type: CallCode.SUPERFLUID_CALL_AGREEMENT,
              to: config.agreements.CFA,
              data: calldata("updateFlow(address,address,int96,bytes)", [
                token,
                receiver,
                flowRate,
                ctx
              ])
            }
          }
          case "delete": {
            const [token, receiver, sender] = _args(rest, ['address', 'address', 'address'])
            return {
              type: CallCode.SUPERFLUID_CALL_AGREEMENT,
              to: config.agreements.CFA,
              data: calldata("deleteFlow(address,address,address,bytes)", [
                token,
                sender,
                receiver,
                ctx
              ])
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
            const [token, indexId] = _args(rest, ['address', 'uint32'])
            return {
              type: CallCode.SUPERFLUID_CALL_AGREEMENT,
              to: config.agreements.IDA,
              data: calldata("createIndex(address,uint32,bytes)", [
                token,
                indexId,
                ctx
              ])
            }
          }
          case "update": {
            const [token, indexId, indexValue] = _args(rest, ['address', 'uint32', 'uint128'])
            return {
              type: CallCode.SUPERFLUID_CALL_AGREEMENT,
              to: config.agreements.IDA,
              data: calldata("updateIndex(address,uint32,uint128,bytes)", [
                token,
                indexId,
                indexValue,
                ctx
              ])
            }
          }
          default:
            throw new Error(`Unrecognized sub-command: ${commandName} ${subCommand}`);
        }
      }
      case "distribute": {
        const [token, indexId, amount] = _args(args, ['address', 'uint32', 'uint256'])
        return {
          type: CallCode.SUPERFLUID_CALL_AGREEMENT,
          to: config.agreements.IDA,
          data: calldata("distribute(address,uint32,uint256,bytes)", [
            token,
            indexId,
            amount,
            ctx
          ])
        }
      }
      case "subscription": {
        const [subCommand, ...rest] = args
        switch (subCommand) {
          case "approve": {
            const [token, indexId, publisher] = _args(rest, ['address', 'uint32', 'address'])
            return {
              type: CallCode.SUPERFLUID_CALL_AGREEMENT,
              to: config.agreements.IDA,
              data: calldata("approveSubscription(address,address,uint32,bytes)", [
                token,
                publisher,
                indexId,
                ctx
              ])
            }
          }
          case "revoke": {
            const [token, indexId, publisher] = _args(rest, ['address', '32', 'address'])
            return {
              type: CallCode.SUPERFLUID_CALL_AGREEMENT,
              to: config.agreements.IDA,
              data: calldata("revokeSubscription(address,address,uint32,bytes)", [
                token,
                publisher,
                indexId,
                ctx
              ])
            }
          }
          case "update": {
            const [token, indexId, subscriber, units] = _args(rest, ['address', 'uint32', 'address', 'uint128'])
            return {
              type: CallCode.SUPERFLUID_CALL_AGREEMENT,
              to: config.agreements.IDA,
              data: calldata("updateSubscription(address,uint32,address,uint128,bytes)", [
                token,
                indexId,
                subscriber,
                units,
                ctx
              ])
            }
          }
          case "delete": {
            const [token, indexId, subscriber, publisher] = _args(rest, ['address', 'uint', 'address', 'address'])
            return {
              type: CallCode.SUPERFLUID_CALL_AGREEMENT,
              to: config.agreements.IDA,
              data: calldata("deleteSubscription(address,address,uint32,address,bytes)", [
                token,
                publisher,
                indexId,
                subscriber,
                ctx
              ])
            }
          }
          default:
            throw new Error(`Unrecognized sub-command: ${commandName} ${subCommand}`);
        }
      }
      case "claim": {
        const [token, indexId, subscriber, publisher] = _args(args, ['address', 'uint32', 'address', 'address'])
        return {
          type: CallCode.SUPERFLUID_CALL_AGREEMENT,
          to: config.agreements.IDA,
          data: calldata("claim(address,address,uint32,address,bytes)", [
            token,
            publisher,
            indexId,
            subscriber,
            ctx
          ])
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
  return actions.map(({ to, data, type }) => new Operation(Promise.resolve({ to, data }), type))
}

export default function vortex(sf: Framework) {
  return async (
    strings: TemplateStringsArray,
    ...keys: string[]
  ): Promise<any> => {
    const config = {
      entities: await sf.query.listAllSuperTokens({}).then(res => res.data.reduce((acc, obj) => ({ ...acc, [`token:${obj.symbol}`]: obj.id }), {})),
      agreements: {
        CFA: sf.settings.config.cfaV1Address,
        IDA: sf.settings.config.idaV1Address,
      }
    }
    const input = strings[0] + keys.map((key, i) => key + strings[i + 1]).join("");
    return sf.batchCall(_vortex(input, config))
  }
}
