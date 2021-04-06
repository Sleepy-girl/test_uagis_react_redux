import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./components/redux/store";
import "./stylesheet/main.css";
import App from "./components/app/App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
