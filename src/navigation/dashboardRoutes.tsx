import { DashboardLayout, DashboardError } from "@/modules/Dashboard";
import DashboardScreen from "@/screens/dashboard";
import FinancesScreen from "@/screens/dashboard/finances";
import AccountScreen from "@/screens/dashboard/account";

export default {
  path: "/dashboard",
  element: <DashboardLayout />,
  errorElement: <DashboardError />,
  children: [
    {
      index: true,
      element: <DashboardScreen />,
    },
    {
      path: 'finances',
      element: <FinancesScreen />,
    },
    {
      path: 'account',
      element: <AccountScreen />,
    },
  ],
};
