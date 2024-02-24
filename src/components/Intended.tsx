import React from "react";
import { useLocation, useNavigate, Navigate } from "react-router-dom";

export function useIntended(dashboardPath = "/dashboard") {
  const { state } = useLocation();
  const navigate = useNavigate();

  return () =>
    navigate(state ? state?.intended || dashboardPath : dashboardPath);
}

const Intended = ({ loginPath = "/login" }: { loginPath?: string }) => {
  const { pathname } = useLocation();
  return <Navigate to={loginPath} state={{ intended: pathname }} replace />;
};

export default React.memo(Intended);
