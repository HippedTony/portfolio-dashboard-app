import { useState } from "react";
import DashboardFlightsTab from "../components/DashboardFlightsTab";
import DashboardFlightsTabContent from "../components/DashboardFlightsTabContent";

function DashboardFlights() {
  const [activeTab, setActiveTab] = useState("next");

  return (
    <div className="mb-5 h-full flex-auto p-0 w-1/2 lg:flex-1 overflow-y-scroll">
      <div role="tablist" className="flex items-start mb-5 gap-4">
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
