import AppNavbar from "@/shared/components/navigation/AppNavbar";
import PortfolioNavbar from "@/shared/components/navigation/PortfolioNavbar";
import { Outlet } from "react-router";

function AppLayout() {
  return (
    <>
      <AppNavbar />
      <PortfolioNavbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
