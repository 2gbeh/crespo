import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Intended from "@/components/Intended";
import AuthContext from "@/hooks/context/AuthContext";
// 
import M from "@/constants/MOCK";

export default function DashboardLayout() {
  const authContext = useContext(AuthContext);
  //
  return authContext.auth || M.auth ? <Outlet /> : <Intended />;
}
