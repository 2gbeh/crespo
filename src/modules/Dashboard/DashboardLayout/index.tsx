import { useLocation, Outlet, Navigate } from "react-router-dom";

export default function DashboardLayout() {
  const location = useLocation();
  const user = true;
  //
  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ intended: location.pathname }} replace />
  );
}
