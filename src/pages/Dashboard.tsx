import DashboardFlights from "@/features/dashboard/sections/DashboardFlights";
import DroneList from "@/features/dashboard/sections/DroneList";
import MissionGallery from "@/features/dashboard/sections/MissionGallery";

function Dashboard() {
  return (
    <div className="mx-4 flex h-auto max-h-[calc(100vh-115px)] flex-col overflow-clip lg:mx-7.5">
      <DroneList />

      <div className="bg-custom-border my-4 h-[0.5px] lg:my-7.5" />

      <div className="mb-4 flex-1 overflow-y-auto text-center lg:mb-12">
        <div className="flex h-auto w-full justify-center gap-5 md:h-full">
          <DashboardFlights />
          <MissionGallery />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
