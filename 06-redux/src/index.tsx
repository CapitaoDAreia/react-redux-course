import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

/*
  Importamos o Provider da lib react-redux para fazer a ligação do Redux com o React.
  O provider receives one prop called store, para ela passamos o retorno da nossa função
  storeConfig, cujo o papel é criar uma store para alimentar o Provider
*/

import { Provider } from "react-redux";
import storeConfig from "./Store/StoreConfig";

const store = storeConfig();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store} >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
