import { Html } from '@react-three/drei';

function PortalLoader() {
  return (
    <Html center>
      <div className="w-max flex flex-col items-center gap-4 text-white">
        <div className="w-14 h-14 rounded-full border-4 border-white/20 border-t-white animate-spin shadow-[0_0_20px_#ffffff]" />

        <p className="text-sm tracking-wide">Cargando portal...</p>
      </div>
    </Html>
  );
}

export default PortalLoader;
