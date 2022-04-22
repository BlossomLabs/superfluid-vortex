import {
  Chain,
  ChainNotConfiguredError,
  UserRejectedRequestError,
} from "wagmi";

import metamask from "./assets/metamask.svg";
import walletconnect from "./assets/walletconnect.svg";

const chainNotConfiguredError = new ChainNotConfiguredError();

export const getWalletIconPath = (
  id: string | undefined
): string | undefined => {
  switch (id) {
    case "injected":
      return metamask;
    case "walletConnect":
      return walletconnect;
    default:
      return;
  }
};

export const getNetworkError = (
  networkError: Error | undefined,
  networkData: { chain?: { unsupported: boolean | undefined }; chains: Chain[] }
): Error | undefined => {
  if (networkError) {
    return networkError;
  }

  if (networkData.chain?.unsupported) {
    return chainNotConfiguredError;
  }
};

export const isUserRejectedRequestError = (error: Error) =>
  error instanceof UserRejectedRequestError;
