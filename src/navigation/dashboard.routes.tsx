import DashboardLayout from "@/modules/Dashboard/DashboardLayout";
import DashboardError from "@/modules/Dashboard/DashboardError";
import DashboardScreen from "@/screens/dashboard";
import NotificationsScreen from "@/screens/dashboard/notifications";
import ProfileScreen from "@/screens/dashboard/profile";
import FinancesScreen from "@/screens/dashboard/finances";
//
import membersRoutes from "./members.routes";

export default {
  path: "/dashboard",
  element: <DashboardLayout />,
  // errorElement: <DashboardError />,
  children: [
    {
      index: true,
      element: <DashboardScreen />,
    },
    {
      path: "notifications",
      element: <NotificationsScreen />,
    },
    {
      path: "profile",
      element: <ProfileScreen />,
    },
    {
      path: "finances",
      element: <FinancesScreen />,
    },
    membersRoutes,
  ],
};
