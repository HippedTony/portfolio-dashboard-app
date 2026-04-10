import DashboardFlightList from "./DashboardFlightList";
import { FaRegCalendarAlt } from "react-icons/fa";

interface DashboardFlightsTabContentProps {
  next: boolean;
}

const flights = [
  {
    droneId: 1,
    nextMissionDatetime: "4:00 P.M.",
    siteName: "Site 1",
    routeName: "Route 1",
  },
  {
    droneId: 2,
    nextMissionDatetime: "6:00 P.M.",
    siteName: "Site 1",
    routeName: "Route 2",
  },
  {
    droneId: 3,
    nextMissionDatetime: "10:00 P.M.",
    siteName: "Site 2",
    routeName: "Route 1",
  },
  {
    droneId: 4,
    nextMissionDatetime: "11:00 P.M.",
    siteName: "Site 2",
    routeName: "Route 2",
  },
];

function DashboardFlightsTabContent({ next }: DashboardFlightsTabContentProps) {
  return (
    <div
      role="tabpanel"
      className="bg-navbar border-custom-border flex h-full flex-col gap-2 rounded-2xl border border-solid p-4 backdrop-blur-md"
    >
      <div className="flex items-center gap-3">
        <FaRegCalendarAlt className="xs:w-auto size-5" />
        <h1 className="overflow-hidden text-sm text-ellipsis whitespace-nowrap first-letter:uppercase md:text-base [&::-webkit-scrollbar]:hidden">
          Monday, April 9
        </h1>
      </div>
      <div className="xs:gap-4 flex size-full flex-col gap-2 overflow-y-auto">
        {flights.length > 0 ? (
          next ? (
            flights.map((flight) => (
              <DashboardFlightList key={flight.droneId} {...flight} />
            ))
          ) : (
            flights.map((flight, key) => (
              <>
                <DashboardFlightList key={flight.droneId} {...flight} />
                <DashboardFlightList key={flight.droneId + key} {...flight} />
              </>
            ))
          )
        ) : (
          <p className="mx-0 my-auto text-xl">There are not upcoming flights</p>
        )}
      </div>
    </div>
  );
}

export default DashboardFlightsTabContent;
