import { Outlet } from "react-router";
import PortfolioNavbar from "@/shared/components/navigation/PortfolioNavbar";

function MainLayout() {
  return (
    <>
      <PortfolioNavbar />
      <main className="bg-bg-primary text-text-primary mx-auto pt-30">
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
