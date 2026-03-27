import { Html, useProgress } from '@react-three/drei';

function PortalLoader() {
  const { progress } = useProgress();
  
  return (
    <Html as="div" center>
      <div className="w-max flex flex-col items-center gap-4 text-white">
        <div className="w-14 h-14 rounded-full border-4 border-white/20 border-t-white animate-spin shadow-[0_0_20px_#ffffff]" />

        <p className="text-sm tracking-wide">{progress.toFixed(2)}%</p>
      </div>
    </Html>
  );
}

export default PortalLoader;
