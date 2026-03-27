import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { NavLink, useNavigate } from "react-router";
import { logout } from "@/store/slices/authSlice";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import NavbarOptions from "@/components/NavbarOptions";

import { IoMenu, IoCloseSharp } from "react-icons/io5";

function Navbar() {
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
      className="fixed top-0 z-20 flex w-full bg-zinc-950 px-6 py-3 text-white sm:px-16"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        {/* Logo / Home */}
        <NavLink
          className="rounded-md px-5 py-2.5 text-sm font-medium hover:text-white/75"
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
            className="px-5 py-2.5 text-sm font-medium hover:text-white/75"
          />
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          className="text-2xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <IoCloseSharp /> : <IoMenu />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-12 right-6 rounded-lg border border-gray-800 bg-black transition-all duration-500 sm:right-16 md:hidden ${
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
              className="py-2 hover:text-white/75"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
