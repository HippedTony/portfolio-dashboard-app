import { useEffect, useState } from "react";

import threejs2 from "@/assets/images/threejs2.png";

type Props = {
  component: React.ReactNode;
};

const images = [threejs2];

const TOTAL_IMAGES = images.length;

function BackgroundAnimated({ component }: Props) {
  const [photo, setPhoto] = useState<number>(
    Math.floor(Math.random() * TOTAL_IMAGES),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setPhoto((prev) => (prev + 1) % TOTAL_IMAGES);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          className="absolute h-dvh w-dvw bg-contain bg-center bg-no-repeat opacity-0 transition-all duration-100 ease-in-out"
          style={{ opacity: photo === index ? 1 : 0 }}
        />
      ))}

      {component}
    </div>
  );
}

export default BackgroundAnimated;
