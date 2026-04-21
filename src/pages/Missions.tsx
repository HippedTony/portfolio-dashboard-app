import MissionsDetails from "@/features/missions/sections/MissionsDetails";
import MissionsList from "@/features/missions/sections/MissionsList";

function Missions() {
  return (
    <div className="flex flex-col">
      <MissionsDetails />
      <div className="bg-custom-border my-4 min-h-[0.5px] lg:my-7.5" />
      <MissionsList />
    </div>
  );
}

export default Missions;
