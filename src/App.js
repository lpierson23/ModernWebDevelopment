import "./styles.css";
import React from "react";
import Components from "./Components/Components.js";
import * as Env from "./environments";
import Parse from "parse";

Parse.serverURL = "https://parseapi.back4app.com";
Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);

function App() {
  return <Components />;
}

export default App;
