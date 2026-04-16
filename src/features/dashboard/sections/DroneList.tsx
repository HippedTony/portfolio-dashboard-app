import { useState } from "react";
import DroneCard from "../components/DroneCard";

type DroneStatus = "ACTIVE" | "READY" | "INACTIVE";

const drones = [
  {
    id: "1",
    status: "active",
    name: "drone 1",
    maintenance: false,
    volt: 40,
    site: { name: "Site 1" },
  },
  {
    id: "2",
    status: "ready",
    name: "drone 2",
    maintenance: false,
    volt: 90,
    site: { name: "Site 2" },
  },
  {
    id: "3",
    status: "inactive",
    name: "drone 3",
    maintenance: true,
    volt: 20,
    site: { name: "Site 3" },
  },
];

const droneStatus: DroneStatus[] = ["ACTIVE", "READY", "INACTIVE"];

const statusColors: Record<DroneStatus, string> = {
  ACTIVE: "bg-active",
  READY: "bg-ready",
  INACTIVE: "bg-inactive",
};

function DroneList() {
  const [selectedDroneId, setSelectedDroneId] = useState("0");

  const handleSelectDrone = (droneId: string) => {
    setSelectedDroneId(droneId === selectedDroneId ? "0" : droneId);
  };

  return (
    <>
      <div className="xs:inline-flex xs:flex-row xs:items-center mb-3.5 flex w-full flex-col items-end">
        <h1 className="xs:mb-0 mb-2 w-full text-start">Units</h1>

        <div className="xs:ml-auto xs:mr-0 mr-auto flex gap-2 p-0 md:gap-7">
          {droneStatus.map((status) => (
            <div
              key={status}
              className="flex items-center justify-center gap-2 md:gap-3"
            >
              <div className={`${statusColors[status]} h-5 w-5 rounded-full`} />
              <p className="xs:text-base pr-2 text-sm capitalize md:pr-0">
                {status.toLocaleLowerCase()}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-custom-border bg-navbar xs:h-52 xs:grid-cols-(--xs-grid-cols-custom) xs:grid-flow-row xs:auto-cols-auto xs:justify-evenly xs:overflow-y-auto grid min-h-53 auto-cols-(--auto-cols-custom) grid-flow-col grid-cols-(--grid-cols-custom) justify-start gap-3 overflow-y-hidden rounded-2xl border border-solid p-4 backdrop-blur-md md:gap-4 lg:grid-cols-(--lg-grid-cols-custom) lg:px-5">
        {drones.map((drone) => (
          <DroneCard
            key={drone.id}
            droneId={drone.id}
            selectedDroneId={selectedDroneId}
            handleSelectDrone={handleSelectDrone}
            droneStatus={drone.status}
            droneName={drone.name}
            droneMaintenance={drone.maintenance}
            droneBattery={drone.volt}
            droneLocation={drone.site.name}
          />
        ))}
      </div>
    </>
  );
}

export default DroneList;
