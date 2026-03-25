import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import Portal from '@/components/Portal';
import PortalLoader from '@/components/PortalLoader';
import { Perf } from 'r3f-perf';

function Experience() {
  return (
    <>
      {false && <Perf position="top-left" />}

      <color args={['#030202']} attach={'background'} />

      <Suspense fallback={<PortalLoader />}>
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

        <Portal />
      </Suspense>
    </>
  );
}

export default Experience;
