import { Outlet } from "react-router";
import PortfolioNavbar from "@/shared/components/navigation/PortfolioNavbar";

function MainLayout() {
  return (
    <>
      <PortfolioNavbar />
      <main className="max-w-7xl">
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
