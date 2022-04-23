import { Main } from "@1hive/1hive-ui";
import React from "react";
import ReactDOM from "react-dom";
import { Wagmi } from "./providers/Wagmi";
import App from "./App";
import { SuperfluidProvider } from "./providers/Superfluid";

ReactDOM.render(
  <React.StrictMode>
    <Wagmi>
      <SuperfluidProvider>
        <Main
          assetsUrl="/aragon-ui/"
          layout={false}
          scrollView={true}
          theme="dark"
        >
          <App />
        </Main>
      </SuperfluidProvider>
    </Wagmi>
  </React.StrictMode>,
  document.getElementById("root")
);
