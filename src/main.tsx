import "./main.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
//
import ROUTER from "constants/ROUTER";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="mx-auto w-full sm:w-[640px] border_">
      <RouterProvider router={ROUTER} />
    </div>
  </React.StrictMode>,
);
