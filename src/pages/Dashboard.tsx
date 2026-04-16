import DashboardFlights from "@/features/dashboard/sections/DashboardFlights";
import DroneList from "@/features/dashboard/sections/DroneList";
import MissionGallery from "@/features/dashboard/sections/MissionGallery";

function Dashboard() {
  return (
    <div className="xs:mx-4 flex h-[calc(100vh-115px)] flex-col overflow-clip lg:mx-7.5">
      <DroneList />

      <div className="bg-custom-border my-4 min-h-[0.5px] lg:my-7.5" />

      <div className="mb-4 grid h-[calc(100vh-414px)] text-center lg:mb-12 lg:h-full">
        <div className="flex w-full flex-col gap-5 overflow-auto lg:flex-row lg:justify-center">
          <DashboardFlights />
          <MissionGallery />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
