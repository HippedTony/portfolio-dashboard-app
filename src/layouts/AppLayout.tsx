import AppNavbar from "@/shared/components/navigation/AppNavbar";
import SideMenu from "@/shared/components/navigation/SideMenu";
import { Outlet } from "react-router";

function AppLayout() {
  return (
    <>
      <AppNavbar />
      <SideMenu />
      <main className="bg-dashboard min-h-dvh pt-28.75">
        <div className="max-w-480 mx-auto font-titillium-web">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default AppLayout;
