import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./hooks/context/AuthContext";
import { Toaster } from "./components/radix-ui/toast/toaster";
//
import authRoutes from "./navigation/auth.routes";
import guestRoutes from "./navigation/guest.routes";
import dashboardRoutes from "./navigation/dashboard.routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="root-container">
      <AuthContextProvider>
        <RouterProvider
          router={createBrowserRouter([
            ...guestRoutes,
            authRoutes,
            dashboardRoutes,
          ])}
        />
      </AuthContextProvider>
    </div>
    <Toaster />
  </React.StrictMode>
);
