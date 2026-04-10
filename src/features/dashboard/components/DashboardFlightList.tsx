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
    <div className="bg-navbar xs:min-h-13 xs:py-1.5 xs:px-3.5 mr-1 flex min-h-25 cursor-pointer justify-between rounded-2xl border border-solid border-[rgb(127,135,144)] px-4 py-6 backdrop-blur-md">
      <div className="xs:w-auto xs:px-2.5 xs:gap-1 flex w-1/2 items-center gap-2 p-0">
        <TbDrone className="xs:hidden block" />
        <h1 className="overflow-x-hidden text-sm text-ellipsis whitespace-nowrap first-letter:uppercase md:text-base [&::-webkit-scrollbar]:hidden">
          {droneId}
        </h1>
      </div>
      <div className="xs:w-auto xs:px-2.5 xs:gap-1 flex w-1/2 items-center gap-2 p-0">
        <TbClock />
        <h1 className="overflow-x-hidden text-sm text-ellipsis whitespace-nowrap first-letter:uppercase md:text-base [&::-webkit-scrollbar]:hidden">
          {nextMissionDatetime}
        </h1>
      </div>
      <div className="xs:w-auto xs:px-2.5 xs:gap-1 flex w-1/2 items-center gap-2 p-0">
        <FaMapMarker />
        <h1 className="overflow-x-hidden text-sm text-ellipsis whitespace-nowrap first-letter:uppercase md:text-base [&::-webkit-scrollbar]:hidden">
          {siteName}
        </h1>
      </div>
      <div className="xs:w-auto xs:px-2.5 xs:gap-1 flex w-1/2 items-center gap-2 p-0">
        <TbRoute />
        <h1 className="overflow-x-hidden text-sm text-ellipsis whitespace-nowrap first-letter:uppercase md:text-base [&::-webkit-scrollbar]:hidden">
          {routeName}
        </h1>
      </div>
    </div>
  );
}

export default DashboardFlightList;
