import { CommandName } from "../types";
import { commands } from "./commands";

const allCommandValues = Object.values(CommandName);

export const isCommand = (word: string): boolean => {
  return !!allCommandValues.find((name) => name === word);
};
export const getCommand = (name: string) => {
  return commands.find((c) => c.name === name);
};
