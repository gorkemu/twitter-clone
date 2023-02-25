import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import TimeAgo from "javascript-time-ago";
import { BrowserRouter } from "react-router-dom";
import en from "javascript-time-ago/locale/en.json";
import { AuthUserProvider } from "./firebase/auth";

TimeAgo.addDefaultLocale(en);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthUserProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthUserProvider>
);
