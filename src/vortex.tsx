import { utils, BigNumber } from "ethers"

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

const entities = new Map<string, string>([
  ["token:DAIx", "0xdai"]
]);

const toDecimals = (amount: number | string, decimals = 18): BigNumber => {
  const [integer, decimal] = String(amount).split(".");
  return BigNumber.from((integer !== "0" ? integer : "") + (decimal || "").padEnd(decimals, "0") || "0");
};

function address(address: string) {
  if (utils.isAddress(address)){
    return address
  } else if(entities.has(address)) {
    return entities.get(address)
  }
  throw Error("Invalid address")
}

function uint(uint: string) {
  const [, amount, decimals = "0", unit] = String(uint).match(/^(\d*(?:\.\d*)?)(?:e(\d+))?([s|m|h|d|w|y]?)$/)!
  return toDecimals(amount, parseInt(decimals)).mul(timeUnits[unit] ?? 1).toString()
}

function bytes(bytes: string) {
  if (bytes.startsWith("0x")) {
    return bytes
  }
  return utils.hexlify(utils.toUtf8Bytes(bytes))
}

function _args(args: string[], types: Function[]) {
  return args.map((arg, i) => types[i] ? types[i](arg) : arg)
}

export default function vortex(
  strings: TemplateStringsArray,
  ...keys: string[]
): any {
  const input = strings[0] + keys.map((key, i) => key + strings[i + 1]).join("");
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
    switch (commandName) {
      case "token": {
        const [subCommand, ...rest] = args
        switch (subCommand) {
          case "approve": {
            const [token, spender, amount] = _args(rest, [address, address, uint])
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
            const [token, sender, recipient, amount] = _args(rest, [address, address, address, uint])
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
            const [token, amount] = _args(rest, [address, uint])
            return {
              type: CallCode.SUPERTOKEN_UPGRADE,
              data: {
                token,
                amount
              }
            }
          }
          case "downgrade": {
            const [token, amount] = _args(rest, [address, uint])
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
            const [token, receiver, flowRate, ctx = "0x", userData = "0x"] = _args(rest, [address, address, uint, bytes, bytes])
            return {
              type: CallCode.SUPERFLUID_CALL_AGREEMENT,
              data: {
                agreementType: "CFA",
                method: Method.CREATE_FLOW,
                arguments: [
                    token,
                    receiver,
                    flowRate,
                    ctx,
                ],
                userData
              },
            }
          }
          case "update": {
            const [token, receiver, flowRate, ctx = "0x", userData = "0x"] = _args(rest, [address, address, uint, bytes, bytes])
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
            const [token, receiver, sender, ctx = "0x", userData = "0x"] = _args(rest, [address, address, address, bytes, bytes])
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
            const [token, indexId, ctx = "0x", userData = "0x"] = _args(rest, [address, uint, bytes, bytes])
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
            const [token, indexId, indexValue, ctx = "0x", userData = "0x"] = _args(rest, [address, uint, uint, bytes, bytes])
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
        const [token, indexId, amount, ctx = "0x", userData = "0x"] = _args(args, [address, uint, uint, bytes, bytes])
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
            const [token, indexId, publisher, ctx = "0x", userData = "0x"] = _args(rest, [address, uint, address, bytes, bytes])
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
            const [token, indexId, publisher, ctx = "0x", userData = "0x"] = _args(rest, [address, uint, address, bytes, bytes])
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
            const [token, indexId, subscriber, units, ctx = "0x", userData = "0x"] = _args(rest, [address, uint, address, uint, bytes, bytes])
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
            const [token, indexId, subscriber, publisher, ctx = "0x", userData = "0x"] = _args(rest, [address, uint, address, address, bytes, bytes])
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
        const [token, indexId, subscriber, publisher, ctx = "0x", userData = "0x"] = _args(args, [address, uint, address, address, bytes, bytes])
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
        const [superApp, action, ...params] = _args(args, [address])
        const calldata = (new utils.Interface([`function ${action} external`])).encodeFunctionData(action.split("(")[0], params)
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
