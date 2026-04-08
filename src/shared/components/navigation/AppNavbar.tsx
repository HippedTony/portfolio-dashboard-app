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
    <nav className="xs:right-7 xs:w-82 bg-navbar font-titillium-web fixed top-7 right-0 z-50 mx-3.5 h-11 w-60 rounded-2xl border-none shadow-lg backdrop-blur-md xl:right-1/2 xl:h-13.5 xl:w-200 xl:translate-x-1/2">
      <div className="xs:gap-3 flex h-full justify-between gap-2 p-2.5 xl:gap-0">
        <AppNavbarSection className="w-fit xl:w-3/8">
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
            style="flex"
          />
        </AppNavbarSection>

        <AppNavbarSection className="xs:gap-3 w-full gap-2 xl:w-1/4 xl:justify-between xl:gap-0">
          <AppNavbarClock>
            <TbBrandThreejs className="xs:size-8 order-4 ms-auto size-7 xl:order-[unset] xl:ms-0" />
          </AppNavbarClock>
        </AppNavbarSection>

        <AppNavbarSection className="w-0 xl:w-3/8">
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
