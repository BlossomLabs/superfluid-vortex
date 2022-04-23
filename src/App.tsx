import React from 'react';
import { useTheme } from "@1hive/1hive-ui";
import { ThemeProvider } from "styled-components";
import { TopBar } from "./components/TopBar";
import { Routes } from "./routes/Routes";
import { Framework } from "@superfluid-finance/sdk-core"
import { providers } from "ethers"
import vortex from './vortex'

declare let window: any;

const provider = new providers.Web3Provider(window.ethereum)
provider.getNetwork()
  .then(({ chainId }) => chainId)
  .then(chainId =>
    Framework.create({
      chainId,
      provider
    })
  )
  .then(sf =>
    vortex(sf)`
      token pre-approve token:fDAI token:fDAIx 100e18
      token upgrade token:fDAIx 100e18 // upgrade 100 daix to play the game
      flow create token:fDAIx 0x40aD5B5b40066432c7A9c876e2C78B4a7564f0dB 1e18/m
    `.exec(provider.getSigner())
  )

function App() {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <div style={{ height: "100vh", border: "1px solid black" }}>
        <TopBar />
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;
