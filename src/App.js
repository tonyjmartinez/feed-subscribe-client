import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { useAuth0 } from "./utils/auth0-helper";
import history from "./utils/history";

function App() {
  const { loading } = useAuth0();

  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  if (loading) return <div>Loading...</div>;

  return (
    <Router history={history}>
      <button onClick={() => loginWithRedirect({})}>LOGIN</button>
      <button onClick={logout}>Logout</button>
      <div>{isAuthenticated ? "Authenticated" : "Not authenticated"}</div>
    </Router>
  );
}

export default App;
