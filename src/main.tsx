import React from "react";
import ReactDOM from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import {routes} from "./router/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
    <App />
  </React.StrictMode>
);
