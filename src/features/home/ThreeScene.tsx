import { Canvas } from '@react-three/fiber';
import Experience from '@/features/home/Experience';

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
      <Experience />
    </Canvas>
  );
}

export default ThreeScene;
