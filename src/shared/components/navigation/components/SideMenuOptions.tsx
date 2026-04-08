import { Link } from "react-router";

interface SideMenuOptionsProps {
  icon: React.ReactNode;
  linkTo: string;
  text: string;
}

function SideMenuOptions({ icon, linkTo, text }: SideMenuOptionsProps) {
  return (
    <li className="inline-table h-5 w-full rounded-lg px-2 py-3 hover:cursor-pointer hover:bg-[#24292e66] hover:backdrop-blur-md">
      <div className="flex items-center">
        {icon}
        <Link to={linkTo} className="mb-0">
          {text}
        </Link>
      </div>
    </li>
  );
}

export default SideMenuOptions;
