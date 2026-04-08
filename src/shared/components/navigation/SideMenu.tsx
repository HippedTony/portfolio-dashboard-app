import { useState } from "react";
import { useDispatch } from "react-redux";

import { clearAuth } from "@/shared/utils/authStorage";
import { logout } from "@/features/auth/authSlice";

import { FaAngleLeft, FaUserCircle, FaRegCalendarAlt } from "react-icons/fa";
import {
  IoExitOutline,
  IoVideocamOutline,
  IoMenuOutline,
} from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md";
import { TbTargetArrow, TbReportSearch } from "react-icons/tb";
import SideMenuOptions from "./components/SideMenuOptions";

const menuOptions = [
  {
    icon: <MdOutlineDashboard className="mr-4 size-6 text-white" />,
    linkTo: "/dashboard",
    text: "Dashboard",
  },
  {
    icon: <TbTargetArrow className="mr-4 size-6 text-white" />,
    linkTo: "/missions",
    text: "Missions",
  },
  {
    icon: <TbReportSearch className="mr-4 size-6 text-white" />,
    linkTo: "/reports",
    text: "Reports",
  },
  {
    icon: <FaRegCalendarAlt className="mr-4 size-6 text-white" />,
    linkTo: "/calendar",
    text: "Calendar",
  },
  {
    icon: <IoVideocamOutline className="mr-4 size-6 text-white" />,
    linkTo: "/monitoring",
    text: "Monitoring",
  },
];

function SideMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    clearAuth();
  };

  return (
    <>
      <aside
        className={`shadow-login fixed top-7 left-7 z-50 float-left h-auto w-62.5 overflow-auto rounded-2xl border-r border-[#ffffff1a] bg-[#383f4599] p-3 backdrop-blur-md transition-all duration-300 ease-in-out ${showMenu ? "translate-x-0" : "-translate-x-70"}`}
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <div className="flex h-11 w-full items-center justify-center">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="ms-1 rounded-full hover:bg-[#383f4566] hover:backdrop-blur-md"
          >
            <FaAngleLeft className="h-9 w-5 p-1" />
          </button>
          <FaUserCircle className="ms-4 size-8 rounded-full" />
          <h5 className="ms-2 text-[14px]">Employee name</h5>
          <button
            onClick={handleLogout}
            className="ms-auto flex size-8 rounded-2xl border-none bg-transparent p-1 hover:bg-[#383f4566] hover:backdrop-blur-md"
          >
            <IoExitOutline className="size-full text-red-500" />
          </button>
        </div>

        <ul className="mt-5 mb-0 h-auto overflow-y-auto pl-0">
          {menuOptions.map((option) => (
            <SideMenuOptions key={option.text} {...option} />
          ))}
        </ul>
      </aside>

      <button
        onClick={() => setShowMenu(!showMenu)}
        className={`fixed top-7 left-7 z-50 block size-13 rounded-2xl bg-[#383f4599] p-3 backdrop-blur-md transition duration-300 ease-in-out hover:bg-[#383f4566] hover:backdrop-blur-md ${!showMenu ? "translate-x-0" : "-translate-x-20"}`}
      >
        <div className="text-[14px] leading-5 font-normal text-white">
          <IoMenuOutline className="size-full" />
        </div>
      </button>
    </>
  );
}

export default SideMenu;
