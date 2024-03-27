import { Outlet } from "react-router-dom";
import TheLogo from "@/components/TheLogo";

export default function AuthLayout() {
  return (
    <div className="mt-12 p-7">
      <header>
        <TheLogo to="/" center />
      </header>
      <main className="mt-5">
        <Outlet />
      </main>
    </div>
  );
}
