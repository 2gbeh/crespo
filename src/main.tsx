import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

//
import authRoutes from "./navigation/auth.routes";
import guestRoutes from "./navigation/guest.routes";
import dashboardRoutes from "./navigation/dashboard.routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="root-container">
      <RouterProvider
        router={createBrowserRouter([...guestRoutes, authRoutes, dashboardRoutes])}
      />
    </div>
  </React.StrictMode>
);
