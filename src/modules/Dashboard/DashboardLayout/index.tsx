import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Intended from "@/components/Intended";
import AuthContext from "@/hooks/context/AuthContext";

export default function DashboardLayout() {
  const { auth } = useContext(AuthContext);
  //
  return auth ? <Outlet /> : <Intended />;
}
