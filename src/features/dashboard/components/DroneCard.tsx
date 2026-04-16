import {
  FaBatteryFull,
  FaBatteryHalf,
  FaBatteryQuarter,
  FaMapMarker,
} from "react-icons/fa";

interface DroneCardProps {
  droneId?: string;
  selectedDroneId?: string;
  handleSelectDrone: (droneId: string) => void;
  droneStatus: string;
  droneName: string;
  droneMaintenance?: boolean;
  droneBattery?: number;
  droneLocation?: string;
}

function DroneCard({
  droneId = "0",
  selectedDroneId = "0",
  handleSelectDrone,
  droneStatus,
  droneName,
  droneMaintenance = false,
  droneBattery = 10,
  droneLocation = "Site 0",
}: DroneCardProps) {
  return (
    <div
      className={`border-custom-border bg-navbar flex h-43 cursor-pointer flex-col items-center justify-start gap-2.5 rounded-2xl border border-solid p-3.5 backdrop-blur-md ${selectedDroneId === droneId ? "border-selected scale-99 border-2" : ""}`}
      onClick={() => handleSelectDrone(droneId)}
    >
      <div className="flex items-center gap-2 self-stretch">
        <div className={`h-5 w-5 rounded-full bg-${droneStatus}`} />
        <p>{droneName}</p>
      </div>

      <div className="flex flex-col justify-center gap-2 self-stretch">
        <p className="text-custom-gray">{droneId}</p>

        <div className="bg-custom-border h-px" />

        <div className="flex flex-col items-start justify-center gap-3 self-stretch">
          {droneMaintenance ? (
            <p className="text-custom-gray">Maintenance</p>
          ) : (
            ""
          )}
          <div className="flex items-center justify-center gap-2">
            {Number(droneBattery) <= 20 ? (
              <FaBatteryQuarter className="text-red-500" />
            ) : Number(droneBattery) > 20 && Number(droneBattery) <= 60 ? (
              <FaBatteryHalf className="text-yellow-500" />
            ) : (
              <FaBatteryFull className="text-green-500" />
            )}
            <p className="text-custom-gray">Battery</p>
          </div>

          {droneLocation ? (
            <div className="flex items-center justify-center gap-2">
              <FaMapMarker />
              <p className="text-custom-gray">{droneLocation}</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default DroneCard;
