import { useTranslation } from "react-i18next";
import NavbarAppLinks from "./NavbarAppLinks";
import type { NavbarProps } from "@/shared/types/navigation.types";

function NavbarOptions(props: NavbarProps) {
  const { className, isOpen } = props;
  const { t } = useTranslation();

  return (
    <>
      {/* Portfolio Links */}
      <div className="flex flex-col items-center gap-4 md:flex-row">
        <a href="#projects" className={className}>
          {t("portfolio.navbar.projects")}
        </a>
        <a href="#skills" className={className}>
          {t("portfolio.navbar.skills")}
        </a>
        <a href="#footer" className={className}>
          {t("portfolio.navbar.contact")}
        </a>
      </div>

      {/* App Links (Desktop) */}
      <div
        className={`border-border bg-bg-primary/90 fixed top-15 hidden rounded-xl border backdrop-blur-md transition-all duration-500 sm:right-6 md:flex ${
          isOpen
            ? "shadow-glow-20 max-h-96 opacity-100"
            : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <div className="mb-2 flex flex-col items-center gap-2 p-3">
          <NavbarAppLinks {...props} />
        </div>
      </div>

      {/* App Links (Mobile) */}
      <div className="border-border mt-3 flex flex-col items-center gap-2 border-t pt-3 md:hidden">
        <NavbarAppLinks {...props} />
      </div>
    </>
  );
}

export default NavbarOptions;
