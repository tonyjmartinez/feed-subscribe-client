import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "./utils/auth0-helper";
import history from "./utils/history";
const clientId = process.env.REACT_APP_CLIENT_ID;
const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === "development";
console.log("isDev?", isDev);

const onRedirectCallback = appState => {
  console.log("appState", appState);
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <Auth0Provider
    domain="tonyjmartinez.auth0.com"
    client_id={clientId}
    audience="https://tonyjmartinez.auth0.com/userinfo"
    // redirect_uri={window.location.origin}
    redirect_uri={isDev ? "http://localhost:3000" : "https://feedsubscri.be"}
    // responseType="token id_token"
    // scope="openid email"
  >
    <App />
  </Auth0Provider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
