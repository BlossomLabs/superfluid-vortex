import { Buffer } from "buffer";
import { useMemo } from "react";
import type { ReactNode } from "react";
import { allChains, WagmiProvider } from "wagmi";
import type { Connector } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { InfuraProvider } from "@ethersproject/providers";
import { ethers } from "ethers";

const CHAIN_WHITELIST = [3, 4, 5, 10, 42, 69, 137, 42161, 421611, 80001];
const INFURA_ID = process.env.REACT_APP_INFURA_ID;

// polyfill Buffer for client for walletconnect
if (!window.Buffer) {
  window.Buffer = Buffer;
}

const getConnectors = (): Connector[] => {
  const chains = allChains.filter((chain) =>
    CHAIN_WHITELIST.includes(chain.id)
  );

  return [
    new InjectedConnector({
      chains,
      options: { shimDisconnect: true },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        infuraId: process.env.REACT_APP_INFURA_ID,
        qrcode: true,
      },
    }),
  ];
};

const getProvider = ({
  chainId,
}: {
  chainId?: number;
  connector?: Connector;
}) => {
  if (chainId && CHAIN_WHITELIST.includes(chainId)) {
    return new InfuraProvider(chainId, INFURA_ID);
  }

  return ethers.getDefaultProvider();
};

export const Wagmi = ({ children }: { children: ReactNode }) => {
  const connectors = useMemo(() => getConnectors(), []);

  return (
    <WagmiProvider connectors={connectors} provider={getProvider}>
      {children}
    </WagmiProvider>
  );
};
