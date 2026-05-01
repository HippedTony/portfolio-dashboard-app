import { VerticalTimelineElement } from "react-vertical-timeline-component";

import showmacImg from "@/assets/images/showmac.jpg";
import spacelabImg from "@/assets/images/spacelab.png";
import freelanceImg from "@/assets/images/freelance.png";

const imagesMap: Record<string, string> = {
  showmac: showmacImg,
  spacelab: spacelabImg,
  freelance: freelanceImg,
};

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
        background: "transparent",
        padding: "0",
        border: "none",
      }}
      contentArrowStyle={{
        borderRight: "7px solid #fcee09",
      }}
      date={exp.period}
      iconStyle={{ background: "#0b0f14", boxShadow: "0 0 12px #fcee09" }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={imagesMap[exp.icon]}
            className="h-[80%] w-[80%] rounded-full object-contain"
          />
        </div>
      }
      dateClassName="ms-4 w-[-webkit-fill-available] xl:ms-0 text-text-primary"
      iconClassName="transition hover:scale-105"
    >
      <div
        onClick={onClick}
        className={`group bg-bg-secondary rounded-t-lg border-t px-4 pt-3 pb-6 transition-all duration-300 xl:rounded-lg xl:border ${
          isTouchDevice
            ? isActive
              ? "border-accent shadow-glow-20"
              : "border-border"
            : "border-border hover:border-accent hover:shadow-glow-20"
        }`}
      >
        {/* Role */}
        <p>{exp.role}</p>
        {/* Company */}
        <p className="text-text-secondary">{exp.company}</p>
        {/* Description */}
        <ul>
          {exp.description.map((des, i) => (
            <li
              key={i}
              className="text-text-secondary ms-5 mt-2 list-disc text-sm"
            >
              {des}
            </li>
          ))}
        </ul>

        {/* Decorative line (cyberpunk) */}
        <div
          className={`from-accent-secondary to-accent-alt mt-4 h-0.5 w-0 bg-linear-to-r transition-all duration-300 group-hover:w-16 ${
            isTouchDevice ? (isActive ? "w-16" : "w-0") : "w-0 group-hover:w-16"
          }`}
        />
      </div>
    </VerticalTimelineElement>
  );
}

export default ExperienceCard;
