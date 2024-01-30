import { Outlet } from "react-router-dom";
import { AvatarPhoto } from "@/components/Avatar";
//
import * as ASSETS from "constants/ASSETS";

export default function AuthLayout() {
  return (
    <div className="mt-12 p-7">
      <header>
        <AvatarPhoto src={ASSETS.icon} size={80} />
      </header>
      <main className="mt-5">
        <Outlet />
      </main>
    </div>
  );
}
