import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import App from "./app";
require("typeface-nunito");

const GlobalStyle = createGlobalStyle`
body {
  font-family: "Nunito", "Helvetica", "Helvetica Neue", "Segoe UI", "Helvetica",
    "Arial", sans-serif;
    background-color: #3f51b51c;
}
`;
ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <App />
  </React.Fragment>,
  document.getElementById("root")
);
