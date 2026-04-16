import { useState } from "react";

import MissionsGalleryImage from "../components/MissionsGalleryImage";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import threejs1 from "@/assets/images/threejs1.png";
import threejs2 from "@/assets/images/threejs2.png";
import threejs3 from "@/assets/images/threejs3.png";

const multimedia = [
  {
    multimediaId: 1,
    flightId: 1,
    droneId: 1,
    routeName: "Route 1",
    siteName: "Site 1",
    image: threejs1,
  },
  {
    multimediaId: 2,
    flightId: 3,
    droneId: 4,
    routeName: "Route 2",
    siteName: "Site 2",
    image: threejs2,
  },
  {
    multimediaId: 3,
    flightId: 4,
    droneId: 2,
    routeName: "Route 3",
    siteName: "Site 3",
    image: threejs3,
  },
];

function MissionGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const hasImages = multimedia && multimedia.length > 0;

  const next = () => {
    setCurrentIndex((prev) => (prev === multimedia.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? multimedia.length - 1 : prev - 1));
  };

  return (
    <div className="xs:mb-0 mb-7 max-h-[calc(100vh-474px)] lg:w-1/2">
      <h1 className="mb-3 px-4 py-2 lg:mb-2.5 lg:pb-2">
        Last inspection gallery
      </h1>

      <div className="bg-navbar border-custom-border xs:h-90 flex h-63 flex-col items-center gap-3.5 rounded-2xl border border-solid px-4 py-1.5 md:px-8.5 md:py-3.5 lg:h-[calc(100%-51px)] lg:px-11 lg:py-4">
        {multimedia !== undefined ? (
          hasImages ? (
            <div className="flex size-full flex-col items-center justify-center">
              <div className="relative size-full overflow-hidden rounded-xl">
                <div
                  className="flex h-full transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {multimedia.map((item) => (
                    <MissionsGalleryImage key={item.multimediaId} {...item} />
                  ))}
                </div>
              </div>

              <div className="mt-2 flex items-center gap-3">
                <button
                  onClick={prev}
                  className="rounded-full bg-black/50 px-3 py-1"
                >
                  <FaArrowLeft />
                </button>

                <div className="flex gap-2">
                  {multimedia.map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 w-2 rounded-full transition-all ${
                        i === currentIndex
                          ? "scale-110 bg-white"
                          : "bg-gray-400"
                      }`}
                    ></div>
                  ))}
                </div>

                <button
                  onClick={next}
                  className="rounded-full bg-black/50 px-3 py-1"
                >
                  <FaArrowRight />
                </button>
              </div>
            </div>
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <h1>This flight has no images</h1>
            </div>
          )
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <h1>There are no recent missions</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default MissionGallery;
