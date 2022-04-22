import { Main } from "@1hive/1hive-ui"
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
     <Main
        assetsUrl="/aragon-ui/"
        layout={false}
        scrollView={true}
        theme="dark"
      >
        <App />
      </Main>
  </React.StrictMode>,
  document.getElementById("root")
);