import { useState } from "react";
import DashboardFlightsTab from "../components/DashboardFlightsTab";
import DashboardFlightsTabContent from "../components/DashboardFlightsTabContent";

function DashboardFlights() {
  const [activeTab, setActiveTab] = useState("next");

  return (
    <div className="grid max-h-[calc(100vh-474px)] grid-rows-[auto_1fr] p-0 lg:w-1/2">
      <div
        role="tablist"
        className="xs:ms-4 ms-3 flex items-start xs:gap-4 lg:ms-0 lg:mb-5"
      >
        <DashboardFlightsTab
          tabName="next"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          text="Upcoming missions"
        />

        <DashboardFlightsTab
          tabName="last"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          text="Past missions"
        />
      </div>

      {activeTab === "next" && <DashboardFlightsTabContent next={true} />}

      {activeTab === "last" && <DashboardFlightsTabContent next={false} />}
    </div>
  );
}

export default DashboardFlights;
