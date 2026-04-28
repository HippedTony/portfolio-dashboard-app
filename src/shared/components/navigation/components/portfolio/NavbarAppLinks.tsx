import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";
import LanguageToggle from "./LanguageToggle";
import type { NavbarProps } from "@/shared/types/navigation.types";

function NavbarAppLinks({
  isAuthenticated,
  closeMenu,
  handleLog,
  toggleResume,
  className = "",
}: NavbarProps) {
  const { t } = useTranslation();
  return (
    <>
      {isAuthenticated && (
        <NavLink to={"/dashboard"} onClick={closeMenu} className={className}>
          {t("portfolio.navbar.dashboard")}
        </NavLink>
      )}

      <button onClick={handleLog} className={className}>
        {!isAuthenticated
          ? t("portfolio.navbar.login")
          : t("portfolio.navbar.logout")}
      </button>

      <button onClick={toggleResume} className={className}>
        Resume
      </button>

      <LanguageToggle />
    </>
  );
}

export default NavbarAppLinks;
