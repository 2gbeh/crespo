import "./globals.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

//
import authRoutes from "./navigation/authRoutes";
import guestRoutes from "./navigation/guestRoutes";
import dashboardRoutes from "./navigation/dashboardRoutes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="root-container">
      <RouterProvider
        router={createBrowserRouter([...guestRoutes, authRoutes, dashboardRoutes])}
      />
    </div>
  </React.StrictMode>
);
