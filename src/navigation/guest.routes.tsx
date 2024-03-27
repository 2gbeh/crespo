import SplashScreen from "@/screens/splash";
import TentScreen from "@/screens/tent";
import TryRegisterScreen from "@/screens/try/try-register";
import TryAgathaScreen from "@/screens/try/try-agatha";

export default [
  {
    path: "/splash",
    element: <SplashScreen />,
  },
  {
    path: "/tent",
    element: <TentScreen />,
  },
  {
    path: "/try/register",
    element: <TryRegisterScreen />,
  },
  {
    path: "/try/agatha",
    element: <TryAgathaScreen />,
  },
];
