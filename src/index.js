import React from "react";
import ReactDOM from "react-dom";
import App from "./sample/app";
import { Inspector, useLog } from "./lib";

ReactDOM.render(
  <Inspector>
    <App />
  </Inspector>,
  document.getElementById("root")
);
