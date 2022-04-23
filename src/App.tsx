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

const upgradeAmount = String(100)
const app = { address: "0x03e75d7dd38cce2e20ffee35ec914c57780a8e29" }
const MINIMUM_GAME_FLOW_RATE = 3

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
    token upgrade token:DAIx ${upgradeAmount}e18 // upgrade 100 daix to play the game
    token approve token:DAIx ${app.address} 1e18
    call ${app.address} participate()
    flow create token:DAIx ${app.address} ${MINIMUM_GAME_FLOW_RATE.toString()}
  `
  )
  .then(console.log)

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
