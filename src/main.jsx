import React from "react";
import ReactDOM from "react-dom/client";

/* MAIN APP */
import App from "./App";

/* STYLES */
import "./App.css";

/* ─────────────────────────────────────────────
   RENDER APP
───────────────────────────────────────────── */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);