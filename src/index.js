import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { HashRouter as Router } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

ReactDOM.render(
  <Router basename="/">
    <App />,
  </Router>,
  document.getElementById("root")
);
