import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Route";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="main_conponent overflow-hidden">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
