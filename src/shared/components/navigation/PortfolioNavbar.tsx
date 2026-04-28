import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import { NavLink, useNavigate } from "react-router";
import { logout } from "@/features/auth/authSlice";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import NavbarOptions from "@/shared/components/navigation/components/portfolio/NavbarOptions";

import { IoMenu, IoCloseSharp } from "react-icons/io5";
import { clearAuth } from "@/shared/utils/authStorage";

function PortfolioNavbar() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );

  const [isOpen, setIsOpen] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLog = () => {
    setIsOpen(false);
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      dispatch(logout());
      clearAuth();
    }
  };

  const toggleResume = () => {
    setIsOpen(false);
    const resumeURL = "/portfolio-dashboard-app/Resume.pdf";
    window.open(resumeURL);
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      ref={navRef}
      className="bg-bg-primary/80 border-border text-text-primary fixed top-0 left-1/2 z-20 flex w-full max-w-480 -translate-x-1/2 border-b px-4 py-1 backdrop-blur-sm md:px-6 lg:px-8"
    >
      <div className="mx-auto flex w-full max-w-480 items-center gap-4">
        {/* Logo / Home */}
        <NavLink
          className="mr-auto rounded-md px-5 py-2.5 font-medium hover:text-white/75"
          to={"/"}
          onClick={closeMenu}
        >
          {t("portfolio.navbar.home")}
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-4 md:flex">
          <NavbarOptions
            isAuthenticated={isAuthenticated}
            closeMenu={closeMenu}
            handleLog={handleLog}
            toggleResume={toggleResume}
            className="px-4 py-2 font-medium hover:text-white/75"
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </div>

        {/* Hamburger Button (Desktop & Mobile) */}
        <button
          className="text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <IoCloseSharp /> : <IoMenu />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`border-border bg-bg-primary fixed top-13 right-4 rounded-b-lg border transition-all duration-500 md:hidden ${
            isOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 overflow-hidden opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-2 px-6 py-4">
            <NavbarOptions
              isAuthenticated={isAuthenticated}
              closeMenu={closeMenu}
              handleLog={handleLog}
              toggleResume={toggleResume}
              className="py-1 hover:text-white/75"
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default PortfolioNavbar;
