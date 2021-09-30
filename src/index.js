import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router } from "react-router-dom";

import './_base.scss'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
