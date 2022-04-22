import React from 'react';
import { useTheme } from "@1hive/1hive-ui";
import { ThemeProvider } from "styled-components";
import { TopBar } from "./components/TopBar";
import { Routes } from "./routes/Routes";
import vortex from './vortex'

const upgradeAmount = String(100)
const app = { address: "0x03e75d7dd38cce2e20ffee35ec914c57780a8e29" }
const MINIMUM_GAME_FLOW_RATE = 3

console.log(vortex`
token upgrade token:DAIx ${upgradeAmount}e18 // upgrade 100 daix to play the game
token approve token:DAIx ${app.address} 1e18
call ${app.address} participate()
flow create token:DAIx ${app.address} ${MINIMUM_GAME_FLOW_RATE.toString()}
`)

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
