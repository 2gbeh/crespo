import AuthLayout from "@/modules/Auth/AuthLayout";
import AuthError from "@/modules/Auth/AuthError";
import LoginScreen from "@/screens/login";
import RegisterScreen from "@/screens/register";
import ForgotPasswordScreen from "@/screens/forgot-password";
import ResetPasswordScreen from "@/screens/reset-password";
import VerifyEmailScreen from "@/screens/verify-email";

export default {
  path: "/",
  element: <AuthLayout />,
  errorElement: <AuthError />,
  children: [
    {
      index: true,
      element: <LoginScreen />,
    },
    {
      path: "login",
      element: <LoginScreen />,
    },
    {
      path: "register",
      element: <RegisterScreen />,
    },
    {
      path: "verify-email",
      element: <VerifyEmailScreen />,
    },
    {
      path: "forgot-password",
      element: <ForgotPasswordScreen />,
    },
    {
      path: "reset-password",
      element: <ResetPasswordScreen />,
    },
  ],
};
