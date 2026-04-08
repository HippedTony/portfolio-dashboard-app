import AppNavbar from "@/shared/components/navigation/AppNavbar";
import SideMenu from "@/shared/components/navigation/SideMenu";
import { Outlet } from "react-router";

function AppLayout() {
  return (
    <>
      <AppNavbar />
      <SideMenu />
      <main className="min-h-dvh pt-28.75 bg-dashboard">
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
