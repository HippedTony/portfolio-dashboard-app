import { VerticalTimelineElement } from "react-vertical-timeline-component";

import showmacImg from '@/assets/showmac.jpg'
import spacelabImg from '@/assets/spacelab.png'
import freelanceImg from '@/assets/freelance.png'

const imagesMap: Record<string, string> = {
  showmac: showmacImg,
  spacelab: spacelabImg,
  freelance: freelanceImg
}

interface ExperienceCardProps {
  exp: {
    company: string;
    role: string;
    period: string;
    icon: string;
    description: string[];
  };
  isTouchDevice: boolean;
  isActive: boolean;
  onClick: () => void;
}

function ExperienceCard({
  exp,
  isTouchDevice,
  isActive,
  onClick,
}: ExperienceCardProps) {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#101828",
        padding: "0",
        border: "none",
      }}
      contentArrowStyle={{
        borderRight: "7px solid #232631",
      }}
      date={exp.period}
      iconStyle={{ background: "#161329" }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <img src={imagesMap[exp.icon]} className="h-[80%] w-[80%] object-contain rounded-full" />
        </div>
      }
      dateClassName="ms-4 w-[-webkit-fill-available] xl:ms-0"
      iconClassName="transition hover:scale-110"
    >
      <div
        onClick={onClick}
        className={`rounded-t-lg border-t bg-gray-900 px-4 pt-2 pb-6 transition xl:rounded-lg xl:border-b ${
          isTouchDevice
            ? isActive
              ? "border-blue-500"
              : "border-gray-800"
            : "border-gray-800 hover:border-blue-500"
        }`}
      >
        <p>{exp.role}</p>
        <p className="text-gray-300">{exp.company}</p>
        <ul>
          {exp.description.map((des, i) => (
            <li key={i} className="ms-5 mt-2 list-disc text-sm text-gray-300">
              {des}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
}

export default ExperienceCard;
