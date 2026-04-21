import { TbDrone, TbRoute } from "react-icons/tb";
import { FaRegCalendarAlt, FaClock } from "react-icons/fa";
import { MdTimer } from "react-icons/md";

interface MissionsDetailsContentProps {
  currentMission: boolean;
  droneId: string;
  missionDate: string;
  missionHour: string;
  routeName: string;
  duration: string | null;
  remainingTime: string;
}

function MissionsDetailsContent({
  currentMission,
  droneId,
  missionDate,
  missionHour,
  routeName,
  duration,
  remainingTime,
}: MissionsDetailsContentProps) {
  return (
    <div className="flex w-full flex-col items-start justify-center gap-y-3">
      <h2 className="mx-auto">
        {currentMission ? "Current mission" : "Last mission"}
      </h2>
      <div className="xs:justify-between flex flex-wrap items-center gap-3 self-stretch">
        <div className="xs:basis-auto basis-[calc(100%/3-8px)]">
          <div className="mb-3 flex gap-1">
            <TbDrone className="text-custom-gray size-4" />
            <p className="text-custom-gray">Drone</p>
          </div>
          <p>{droneId}</p>
        </div>

        <div className="xs:basis-auto basis-[calc(100%/3-8px)]">
          <div className="mb-3 flex gap-1">
            <FaRegCalendarAlt className="text-custom-gray size-4" />
            <p className="text-custom-gray">Date</p>
          </div>
          <p>{missionDate}</p>
        </div>

        <div className="xs:basis-auto basis-[calc(100%/3-8px)]">
          <div className="mb-3 flex gap-1">
            <FaClock className="text-custom-gray size-4" />
            <p className="text-custom-gray">Hour</p>
          </div>
          <p>{missionHour}</p>
        </div>

        <div className="xs:basis-auto basis-[calc(100%/3-8px)]">
          <div className="mb-3 flex gap-1">
            <TbRoute className="text-custom-gray size-4" />
            <p className="text-custom-gray">Route</p>
          </div>
          <p>{routeName}</p>
        </div>

        <div
          className={`xs:basis-auto basis-[calc(100%/2-8px)] ${currentMission ? "hidden" : ""}`}
        >
          <div className="mb-3 flex gap-1">
            <MdTimer className="text-custom-gray size-4" />
            <p className="text-custom-gray">Duration</p>
          </div>
          <p>{duration}</p>
        </div>

        <div
          className={`xs:basis-auto basis-[calc(100%/2-8px)] ${currentMission ? "" : "hidden"}`}
        >
          <div className="mb-3 flex gap-1">
            <MdTimer className="text-custom-gray size-4" />
            <p className="text-custom-gray">Remaining</p>
          </div>
          <p>{remainingTime}</p>
        </div>
      </div>
    </div>
  );
}

export default MissionsDetailsContent;
