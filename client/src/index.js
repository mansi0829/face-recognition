import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthUserProvider } from "./context/AuthUserContext";

ReactDOM.render(
  <BrowserRouter>
    <AuthUserProvider>
      <App />
    </AuthUserProvider>
  </BrowserRouter>,

  document.getElementById("root")
);
