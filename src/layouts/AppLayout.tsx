import AppNavbar from "@/shared/components/navigation/AppNavbar";
import SideMenu from "@/shared/components/navigation/SideMenu";
import { Outlet } from "react-router";

function AppLayout() {
  return (
    <>
      <AppNavbar />
      <SideMenu />
      <main className="bg-dashboard min-h-dvh pt-26.25 xl:pt-28.75">
        <div className="font-titillium-web mx-auto max-w-480">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default AppLayout;
