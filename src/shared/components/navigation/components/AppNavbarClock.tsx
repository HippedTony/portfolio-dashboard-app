import { useEffect, useState } from "react";

import dayjs from "dayjs";

interface AppNavbarClockProps {
  children: React.ReactNode;
}

function AppNavbarClock({ children }: AppNavbarClockProps) {
  const [currentDateTime, setCurrentDateTime] = useState(dayjs());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(dayjs());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <p className="w-20">{currentDateTime.format("DD/MM/YY")}</p>
      {children}
      <p className="w-18 text-center">{currentDateTime.format("HH:mm")}</p>
    </>
  );
}

export default AppNavbarClock;
