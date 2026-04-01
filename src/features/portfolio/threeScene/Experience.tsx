import { OrbitControls } from "@react-three/drei";
import Portal from "@/features/portfolio/threeScene/Portal";
import { Perf } from "r3f-perf";
import { useEffect, useState } from "react";

function Experience() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      {false && <Perf position="top-left" />}

      <color args={["#030202"]} attach={"background"} />

      <OrbitControls
        makeDefault
        enableDamping
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
        dampingFactor={0.05}
      />

      <Portal isMobile={isMobile} />
    </>
  );
}

export default Experience;
