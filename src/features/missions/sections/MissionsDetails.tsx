import { useState } from "react";

import MissionsDetailsContent from "@/features/missions/components/MissionDetailsContent";
import Tab from "@/shared/components/ui/tabs/Tab";

import dayjs from "dayjs";

const currentDate = dayjs();

const currentMissionDetails = {
  currentMission: true,
  droneId: "1",
  missionDate: currentDate.format("DD/MM/YY").toString(),
  missionHour: currentDate.format("hh:mm A").toString(),
  routeName: "Route 1",
  duration: "00:30:00",
  remainingTime: "00:30:00",
};

const lastMissionDetails = {
  currentMission: false,
  droneId: "1",
  missionDate: currentDate.subtract(1, "day").format("DD/MM/YY").toString(),
  missionHour: currentDate.format("hh:mm A").toString(),
  routeName: "Route 1",
  duration: "00:35:00",
  remainingTime: "00:35:00",
};

function MissionsDetails() {
  const [activeTab, setActiveTab] = useState("current");

  return (
    <>
      <div role="tablist" className="ms-3 flex lg:hidden">
        <Tab
          tabName="current"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          text="Current mission"
        />
        <Tab
          tabName="last"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          text="Last mission"
        />
      </div>
      <div className="border-custom-border bg-navbar xs:h-28 mx-auto inline-flex h-41 w-full items-center justify-center rounded-2xl border px-4 py-3 shadow-lg">
        <div className="flex w-full lg:hidden">
          {activeTab === "current" && (
            <MissionsDetailsContent {...currentMissionDetails} />
          )}
          {activeTab === "last" && (
            <MissionsDetailsContent {...lastMissionDetails} />
          )}
        </div>

        <div className="hidden w-full lg:flex">
          <MissionsDetailsContent {...currentMissionDetails} />
          <div className="bg-custom-border mx-4 h-auto w-px"></div>
          <MissionsDetailsContent {...lastMissionDetails} />
        </div>
      </div>
    </>
  );
}

export default MissionsDetails;
