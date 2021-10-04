import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AuthenProvider from "./context/authencontext";

ReactDOM.render(
  <AuthenProvider>
    <App />
  </AuthenProvider>,
  document.getElementById("root")
);

reportWebVitals();
