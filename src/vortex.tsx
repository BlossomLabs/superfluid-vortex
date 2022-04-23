import { utils, BigNumber } from "ethers"
import { Framework } from "@superfluid-finance/sdk-core"

type Config = {
  entities: { [key: string]: string }
}

export enum CallCode {
  ERC20_APPROVE = 1,
  ERC20_TRANSFER_FROM = 2,
  SUPERTOKEN_UPGRADE = 101,
  SUPERTOKEN_DOWNGRADE = 102,
  SUPERFLUID_CALL_AGREEMENT = 201,
  CALL_APP_ACTION = 202
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



function _vortex(input: string, config: Config) {
  const _args = (args: string[], types: string[]) => {
    return args.map((arg, i) => types[i] ? resolveParam(arg, types[i], config) : arg)
  }

  const commands = input
    .split("\n")
    .map((command) => command.split("#")[0].split("//")[0])
    .map((command) => command.trim())
    .filter((command) => !!command);
  return commands.map((command) => {
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
            const [token, spender, amount] = _args(rest, ['address', 'address', 'uint'])
            return {
              type: CallCode.ERC20_APPROVE,
              data: {
                token,
                amount,
                spender
              }

            }
          }
          case "transfer-from": {
            const [token, sender, recipient, amount] = _args(rest, ['address', 'address', 'address', 'uint'])
            return {
              type: CallCode.ERC20_TRANSFER_FROM,
              data: {
                token,
                sender,
                recipient,
                amount
              }
            }
          }
          case "upgrade": {
            const [token, amount] = _args(rest, ['address', 'uint'])
            return {
              type: CallCode.SUPERTOKEN_UPGRADE,
              data: {
                token,
                amount
              }
            }
          }
          case "downgrade": {
            const [token, amount] = _args(rest, ['address', 'uint'])
            return {
              type: CallCode.SUPERTOKEN_DOWNGRADE,
              data: {
                token,
                amount
              }
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
            const [token, receiver, flowRate, userData = "0x"] = _args(rest, ['address', 'address', 'uint', 'bytes'])
            return {
              type: CallCode.SUPERFLUID_CALL_AGREEMENT,
              data: {
                agreementType: "CFA",
                method: Method.CREATE_FLOW,
                arguments: [
                  token,
                  receiver,
                  flowRate,
                  ctx
                ],
                userData
              },
            }
          }
          case "update": {
            const [token, receiver, flowRate, userData = "0x"] = _args(rest, ['address', 'address', 'uint', 'bytes'])
            return {
              type: CallCode.SUPERFLUID_CALL_AGREEMENT,
              data: {
                agreementType: "CFA",
                method: Method.UPDATE_FLOW,
                arguments: [
                  token,
                  receiver,
                  flowRate,
                  ctx
                ]
              },
              userData
            }
          }
          case "delete": {
            const [token, receiver, sender, userData = "0x"] = _args(rest, ['address', 'address', 'address', 'bytes'])
            return {
              type: CallCode.SUPERFLUID_CALL_AGREEMENT,
              data: {
                agreementType: "CFA",
                method: Method.DELETE_FLOW,
                arguments: [
                  token,
                  sender,
                  receiver,
                  ctx
                ]
              },
              userData
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
            const [token, indexId, userData = "0x"] = _args(rest, ['address', 'uint', 'bytes'])
            return {
              type: CallCode.SUPERFLUID_CALL_AGREEMENT,
              data: {
                agreementType: "IDA",
                method: Method.CREATE_INDEX,
                arguments: [
                  token,
                  indexId,
                  ctx
                ]
              },
              userData
            }
          }
          case "update": {
            const [token, indexId, indexValue, userData = "0x"] = _args(rest, ['address', 'uint', 'uint', 'bytes'])
            return {
              type: CallCode.SUPERFLUID_CALL_AGREEMENT,
              data: {
                agreementType: "IDA",
                method: Method.UPDATE_INDEX,
                arguments: [
                  token,
                  indexId,
                  indexValue,
                  ctx
                ]
              },
              userData
            }
          }
          default:
            throw new Error(`Unrecognized sub-command: ${commandName} ${subCommand}`);
        }
      }
      case "distribute": {
        const [token, indexId, amount, userData = "0x"] = _args(args, ['address', 'uint', 'uint', 'bytes'])
        return {
          type: CallCode.SUPERFLUID_CALL_AGREEMENT,
          data: {
            agreementType: "IDA",
            method: Method.DISTRIBUTE,
            arguments: [
              token,
              indexId,
              amount,
              ctx
            ]
          },
          userData
        }
      }
      case "subscription": {
        const [subCommand, ...rest] = args
        switch (subCommand) {
          case "approve": {
            const [token, indexId, publisher, userData = "0x"] = _args(rest, ['address', 'uint', 'address', 'bytes'])
            return {
              type: CallCode.SUPERFLUID_CALL_AGREEMENT,
              data: {
                agreementType: "IDA",
                method: Method.APPROVE_SUBSCRIPTION,
                arguments: [
                  token,
                  publisher,
                  indexId,
                  ctx
                ]
              },
              userData
            }
          }
          case "revoke": {
            const [token, indexId, publisher, userData = "0x"] = _args(rest, ['address', 'uint', 'address', 'bytes'])
            return {
              type: CallCode.SUPERFLUID_CALL_AGREEMENT,
              data: {
                agreementType: "IDA",
                method: Method.REVOKE_SUBSCRIPTION,
                arguments: [
                  token,
                  publisher,
                  indexId,
                  ctx
                ]
              },
              userData
            }
          }
          case "update": {
            const [token, indexId, subscriber, units, userData = "0x"] = _args(rest, ['address', 'uint', 'address', 'uint', 'bytes'])
            return {
              type: CallCode.SUPERFLUID_CALL_AGREEMENT,
              data: {
                agreementType: "IDA",
                method: Method.UPDATE_SUBSCRIPTION,
                arguments: [
                  token,
                  indexId,
                  subscriber,
                  units,
                  ctx
                ]
              },
              userData
            }
          }
          case "delete": {
            const [token, indexId, subscriber, publisher, userData = "0x"] = _args(rest, ['address', 'uint', 'address', 'address', 'bytes'])
            return {
              type: CallCode.SUPERFLUID_CALL_AGREEMENT,
              data: {
                agreementType: "IDA",
                method: Method.DELETE_SUBSCRIPTION,
                arguments: [
                  token,
                  publisher,
                  indexId,
                  subscriber,
                  ctx
                ]
              },
              userData
            }
          }
          default:
            throw new Error(`Unrecognized sub-command: ${commandName} ${subCommand}`);
        }
      }
      case "claim": {
        const [token, indexId, subscriber, publisher, userData = "0x"] = _args(args, ['address', 'uint', 'address', 'address', 'bytes'])
        return {
          type: CallCode.SUPERFLUID_CALL_AGREEMENT,
          data: {
            agreementType: "IDA",
            method: Method.CLAIM,
            arguments: [
              token,
              indexId,
              subscriber,
              publisher,
              ctx
            ]
          },
          userData
        }
      }
      case "call": {
        const [superApp, action, ...params] = _args(args, ['address'])
        const paramTypes = action.split("(")[1].split(")")[0].split(",").map(resolveParam)
        const calldata = (new utils.Interface([`function ${action} external`])).encodeFunctionData(action.split("(")[0], _args(params, paramTypes))
        return {
          type: CallCode.CALL_APP_ACTION,
          superApp,
          calldata
        }
      }
      default:
        throw new Error("Unrecognized command: " + commandName);
    }
  })
}

export default function vortex(sf: Framework) {
  return async (
    strings: TemplateStringsArray,
    ...keys: string[]
  ): Promise<any> => {
    const config = {
      entities: await sf.query.listAllSuperTokens({}).then(res => res.data.reduce((acc, obj) => ({ ...acc, [`token:${obj.symbol}`]: obj.id }), {}))
    }
    const input = strings[0] + keys.map((key, i) => key + strings[i + 1]).join("");
    return _vortex(input, config)
  }
}
