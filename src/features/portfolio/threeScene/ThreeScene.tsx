import { Canvas } from "@react-three/fiber";
import Experience from "@/features/portfolio/threeScene/Experience";
import { Suspense } from "react";
import PortalLoader from "@/features/portfolio/components/PortalLoader";

function ThreeScene() {
  return (
    <Canvas
      className="touch-none"
      camera={{
        fov: 45,
        near: 0.1,
        far: 2000,
        position: [1, 2, 6],
      }}
    >
      <Suspense fallback={<PortalLoader />}>
        <Experience />
      </Suspense>
    </Canvas>
  );
}

export default ThreeScene;
