import { Link } from "react-router";

interface SideMenuOptionsProps {
  icon: React.ReactNode;
  linkTo: string;
  text: string;
  currentLocation: string;
}

function SideMenuOptions({
  icon,
  linkTo,
  text,
  currentLocation,
}: SideMenuOptionsProps) {
  return (
    <Link
      to={linkTo}
      className={`hover:bg-navbar-option inline-table h-5 w-full rounded-lg px-2 py-3 hover:cursor-pointer hover:backdrop-blur-md ${
        currentLocation === linkTo ? "bg-navbar-option backdrop-blur-md" : ""
      }`}
    >
      <div className="flex items-center">
        {icon}
        <p className="mb-0">{text}</p>
      </div>
    </Link>
  );
}

export default SideMenuOptions;
