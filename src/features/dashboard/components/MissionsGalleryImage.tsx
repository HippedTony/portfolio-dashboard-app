type MissionsGalleryImageProps = {
  multimediaId?: number;
  flightId: number;
  droneId: number;
  routeName: string;
  siteName: string;
  image: string;
};

function MissionsGalleryImage({
  flightId,
  droneId,
  routeName,
  siteName,
  image,
}: MissionsGalleryImageProps) {
  return (
    <div className="flex w-full shrink-0 flex-col justify-center">
      <h1 className="xs:text-base mb-2 text-start text-sm md:mb-4">
        Flight {flightId} &#8226; Drone {droneId} &#8226; {routeName} &#8226;{" "}
        {siteName}
      </h1>
      <img
        src={image}
        alt={image}
        className="mx-auto h-40 w-fit rounded-xl object-cover md:h-59"
        loading="lazy"
      />
    </div>
  );
}

export default MissionsGalleryImage;
