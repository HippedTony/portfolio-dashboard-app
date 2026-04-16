import { TbDrone, TbClock, TbRoute } from "react-icons/tb";
import { FaMapMarker } from "react-icons/fa";

interface DashboardFlightListProps {
  type?: string;
  droneId: number;
  nextMissionDatetime: string;
  siteName: string;
  routeName: string;
  showModal?: () => {};
  info?: [];
}

function DashboardFlightList({
  droneId,
  nextMissionDatetime,
  siteName,
  routeName,
}: DashboardFlightListProps) {
  return (
    <div className="bg-navbar xs:min-h-13 xs:py-1.5 xs:px-3.5 xs:flex border-custom-border mr-1 grid min-h-20 cursor-pointer grid-cols-2 justify-between rounded-2xl border border-solid px-2 py-2 backdrop-blur-md">
      <div className="w-auto xs:px-2.5 xs:gap-1 flex items-center gap-2 p-0">
        <TbDrone className="size-4" />
        <h1 className="overflow-x-hidden text-sm text-ellipsis whitespace-nowrap first-letter:uppercase md:text-base [&::-webkit-scrollbar]:hidden">
          {droneId}
        </h1>
      </div>
      <div className="w-auto xs:px-2.5 xs:gap-1 flex items-center gap-2 p-0">
        <TbClock className="size-4" />
        <h1 className="overflow-x-hidden text-sm text-ellipsis whitespace-nowrap first-letter:uppercase md:text-base [&::-webkit-scrollbar]:hidden">
          {nextMissionDatetime}
        </h1>
      </div>
      <div className="w-auto xs:px-2.5 xs:gap-1 flex items-center gap-2 p-0">
        <FaMapMarker className="size-4" />
        <h1 className="overflow-x-hidden text-sm text-ellipsis whitespace-nowrap first-letter:uppercase md:text-base [&::-webkit-scrollbar]:hidden">
          {siteName}
        </h1>
      </div>
      <div className="w-auto xs:px-2.5 xs:gap-1 flex items-center gap-2 p-0">
        <TbRoute className="size-4" />
        <h1 className="overflow-x-hidden text-sm text-ellipsis whitespace-nowrap first-letter:uppercase md:text-base [&::-webkit-scrollbar]:hidden">
          {routeName}
        </h1>
      </div>
    </div>
  );
}

export default DashboardFlightList;
