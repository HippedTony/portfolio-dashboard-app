import AppNavbarSection from "./components/AppNavbarSection";
import AppNavbarItem from "./components/AppNavbarItem";

import { FaBatteryFull, FaMountain } from "react-icons/fa";
import { TiWeatherCloudy } from "react-icons/ti";
import { IoSpeedometerOutline } from "react-icons/io5";
import { FaTemperatureQuarter } from "react-icons/fa6";
import { TbBrandThreejs } from "react-icons/tb";
import AppNavbarClock from "./components/AppNavbarClock";

function AppNavbar() {
  return (
    <nav className="fixed top-7.5 left-1/2 z-50 mx-3.5 h-13.5 w-200 -translate-x-1/2 gap-75 rounded-2xl border-none bg-[#383f4599] backdrop-blur-md">
      <div className="flex h-full justify-between p-2.5">
        <AppNavbarSection className="w-3/8">
          <AppNavbarItem
            icon={<div className="size-3.5 rounded-full bg-green-500" />}
            text="Drone 1"
          />
          <AppNavbarItem
            icon={<TiWeatherCloudy className="size-6" />}
            text="Clear"
          />
          <AppNavbarItem
            icon={<FaTemperatureQuarter className="size-5" />}
            text="18°C"
          />
        </AppNavbarSection>

        <AppNavbarSection className="w-1/4 justify-between">
          <AppNavbarClock>
            <TbBrandThreejs className="size-8" />
          </AppNavbarClock>
        </AppNavbarSection>

        <AppNavbarSection className="w-3/8">
          <AppNavbarItem
            icon={<FaBatteryFull className="size-5 text-green-500" />}
            text="100%"
          />
          <AppNavbarItem
            icon={<IoSpeedometerOutline className="size-5" />}
            text="10 km/h"
          />
          <AppNavbarItem
            icon={<FaMountain className="size-5" />}
            text="100 mts"
          />
        </AppNavbarSection>
      </div>
    </nav>
  );
}

export default AppNavbar;
