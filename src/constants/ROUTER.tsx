import { createBrowserRouter } from "react-router-dom";
//
import { AuthError, AuthLayout, ForgotPassword, Login, ResetPassword } from "pages/auth";
import { DashboardError, DashboardLayout, Home } from "pages/dashboard";

export default createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    errorElement: <AuthError />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <DashboardError />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
