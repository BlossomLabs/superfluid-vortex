export enum ParameterType {
  Address = "address",
  String = "string",
  Bool = "bool",
  Bytes = "bytes",
  Uint = "uint",
}

export enum CommandName {
  Call = "call",
  Token = "token",
  Flow = "flow",
  Index = "index",
  Distribute = "distribute",
  Subscription = "subscription",
  Claim = "claim",
  // Sub-commands
  Approve = "approve",
  TransferFrom = "transfer-from",
  Upgrade = "upgrade",
  Downgrade = "downgrade",
  Revoke = "revoke",
  Create = "create",
  Update = "update",
  Delete = "delete",
}

export interface Parameter {
  name: string;
  type: ParameterType;
  default?: any;
}

export interface Command {
  name: CommandName;
  subCommands?: Command[];
  params?: Parameter[];
}
