import { Command, CommandName, Parameter, ParameterType } from "../types";

const { Call, Claim, Distribute, Flow, Index, Subscription, Token } =
  CommandName;
// Sub-commands
const {
  Approve,
  TransferFrom,
  Upgrade,
  Downgrade,
  Create,
  Update,
  Delete,
  Revoke,
} = CommandName;
const { Address, Bytes, Uint } = ParameterType;

const receiverParam: Parameter = {
  name: "receiver",
  type: Address,
};
const indexIdParam: Parameter = {
  name: "indexId",
  type: Uint,
};
const subscriberParam: Parameter = {
  name: "subscriber",
  type: Address,
};
const publisherParam: Parameter = {
  name: "publisher",
  type: Address,
};
const tokenParam: Parameter = {
  name: "token",
  type: Address,
};
const amountParam: Parameter = {
  name: "amount",
  type: Uint,
};
const userDataParam: Parameter = {
  name: "userData",
  type: ParameterType.String,
  default: "0x",
};

export const commands: Command[] = [
  {
    name: Call,
    params: [
      { name: "superApp", type: Address },
      { name: "calldata", type: Bytes },
    ],
  },
  {
    name: Claim,
    params: [tokenParam, indexIdParam, subscriberParam, publisherParam],
  },
  {
    name: Distribute,
    params: [tokenParam, indexIdParam, amountParam, userDataParam],
  },
  {
    name: Token,
    subCommands: [
      {
        name: Approve,
        params: [tokenParam, { name: "spender", type: Address }, amountParam],
      },
      {
        name: TransferFrom,
        params: [
          tokenParam,
          { name: "sender", type: Address },
          { name: "recipient", type: Address },
          amountParam,
        ],
      },
      {
        name: Upgrade,
        params: [tokenParam, amountParam],
      },
      {
        name: Downgrade,
        params: [tokenParam, amountParam],
      },
    ],
  },
  {
    name: Flow,
    subCommands: [
      {
        name: Create,
        params: [
          tokenParam,
          receiverParam,
          { name: "flowRate", type: Uint },
          userDataParam,
        ],
      },
      {
        name: Update,
        params: [
          tokenParam,
          receiverParam,
          { name: "flowRate", type: Uint },
          userDataParam,
        ],
      },
      {
        name: Delete,
        params: [
          tokenParam,
          { name: "sender", type: Address },
          receiverParam,
          userDataParam,
        ],
      },
    ],
  },
  {
    name: Index,
    subCommands: [
      { name: Create, params: [tokenParam, indexIdParam, userDataParam] },
      {
        name: Update,
        params: [
          tokenParam,
          indexIdParam,
          { name: "indexValue", type: ParameterType.String },
          userDataParam,
        ],
      },
    ],
  },
  {
    name: Subscription,
    subCommands: [
      {
        name: Approve,
        params: [
          tokenParam,
          indexIdParam,
          publisherParam,
          { name: "units", type: Uint },
          userDataParam,
        ],
      },
      {
        name: Update,
        params: [
          tokenParam,
          indexIdParam,
          subscriberParam,
          { name: "units", type: Uint },
          userDataParam,
        ],
      },
      {
        name: Revoke,
        params: [tokenParam, indexIdParam, publisherParam, userDataParam],
      },
      {
        name: Delete,
        params: [
          tokenParam,
          indexIdParam,
          subscriberParam,
          publisherParam,
          userDataParam,
        ],
      },
    ],
  },
];
