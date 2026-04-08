import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";

import SideMenuOptions from "./components/SideMenuOptions";
import { clearAuth } from "@/shared/utils/authStorage";
import { logout } from "@/features/auth/authSlice";

import { FaAngleLeft, FaRegCalendarAlt } from "react-icons/fa";
import {
  IoExitOutline,
  IoVideocamOutline,
  IoMenuOutline,
} from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md";
import { TbTargetArrow, TbReportSearch } from "react-icons/tb";

const menuOptions = [
  {
    icon: <MdOutlineDashboard className="mr-4 size-6" />,
    linkTo: "/dashboard",
    text: "Dashboard",
  },
  {
    icon: <TbTargetArrow className="mr-4 size-6" />,
    linkTo: "/missions",
    text: "Missions",
  },
  {
    icon: <TbReportSearch className="mr-4 size-6" />,
    linkTo: "/reports",
    text: "Reports",
  },
  {
    icon: <FaRegCalendarAlt className="mr-4 size-6" />,
    linkTo: "/calendar",
    text: "Calendar",
  },
  {
    icon: <IoVideocamOutline className="mr-4 size-6" />,
    linkTo: "/monitoring",
    text: "Monitoring",
  },
];

function SideMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    setShowMenu(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node)
      ) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    clearAuth();
  };

  return (
    <>
      <aside
        ref={menuRef}
        className={`xs:left-7 bg-navbar font-titillium-web fixed top-7 left-4 z-50 float-left h-auto w-72 overflow-auto rounded-2xl border-r border-[rgba(255,255,255,0.1)] p-3 backdrop-blur-md transition-all duration-300 ease-in-out ${showMenu ? "translate-x-0 shadow-lg" : "-translate-x-80 shadow-none"}`}
      >
        <div className="flex h-11 w-full items-center justify-center">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="hover:bg-navbar-hover ms-1 rounded-full hover:backdrop-blur-md"
          >
            <FaAngleLeft className="h-9 w-5 p-1" />
          </button>
          <img
            src="https://picsum.photos/id/237/64/64"
            className="ms-3 size-11 rounded-full"
          />
          <h5 className="ms-2">Tony Paniagua</h5>
          <button
            onClick={handleLogout}
            className="hover:bg-navbar-hover ms-auto flex size-8 rounded-2xl border-none bg-transparent p-1 hover:backdrop-blur-md"
          >
            <IoExitOutline className="size-full text-red-500" />
          </button>
        </div>

        <div className="mt-5 mb-0 h-auto overflow-y-auto pl-0">
          {menuOptions.map((option) => (
            <SideMenuOptions
              key={option.text}
              currentLocation={location.pathname}
              {...option}
            />
          ))}
        </div>
      </aside>

      <button
        ref={buttonRef}
        onClick={() => setShowMenu(!showMenu)}
        className={`xs:left-7 bg-navbar hover:bg-navbar-hover fixed top-7 left-4 z-50 block size-11 rounded-2xl p-2 backdrop-blur-md transition duration-300 ease-in-out hover:backdrop-blur-md xl:size-13 xl:p-3 ${!showMenu ? "translate-x-0" : "-translate-x-20"}`}
      >
        <div className="text-[14px] leading-5 font-normal text-white">
          <IoMenuOutline className="size-full" />
        </div>
      </button>
    </>
  );
}

export default SideMenu;
