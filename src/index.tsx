import { Main } from "@1hive/1hive-ui";
import React from "react";
import ReactDOM from "react-dom";
import { Wagmi } from "./providers/Wagmi";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Wagmi>
      <Main
        assetsUrl="/aragon-ui/"
        layout={false}
        scrollView={true}
        theme="dark"
      >
        <App />
      </Main>
    </Wagmi>
  </React.StrictMode>,
  document.getElementById("root")
);
