import type { SkillsInformation } from "@/shared/types/projects.type";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const skills = {
  languages: [
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS",
    "Python",
    "Dart",
    "Java",
    "SQL",
  ],
  webTechnologies: [
    "React.js",
    "Angular",
    "Next.js",
    "Three.js",
    "React Three Fiber",
    "Tailwind CSS",
    "Boostrap",
    "Material UI",
    "Radix UI",
    "Zustand",
    "Redux",
    "React Query",
    "Axios",
    "Vite",
    "WordPress",
  ],
  backendFrameworks: [
    "Node.js",
    "Express",
    "NestJS",
    "Django",
    "GraphQL",
    "Apollo",
    "tRPC",
  ],
  databases: ["MongoDB", "QSLite", "Firebase", "SQL Server"],
};

function SkillsCard() {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState(false);
  const isTouchDevice = window.matchMedia("(hover: none)").matches;

  const skillsTitles = t("portfolio.about.skills.skills", {
    returnObjects: true,
  }) as SkillsInformation;

  return (
    <div
      className={`bg-bg-secondary border-border text-text-secondary mx-auto w-11/12 rounded-xl border p-6 font-mono transition-all duration-300 md:w-2/3 md:p-8 ${
        isTouchDevice
          ? isActive
            ? "border-accent shadow-glow-20 scale-[1.02]"
            : "hover:border-accent hover:shadow-glow-15"
          : "hover:border-accent hover:shadow-glow-20 hover:scale-[1.02]"
      }`}
      onClick={() => {
        if (isTouchDevice) {
          setIsActive((prev) => !prev);
        }
      }}
    >
      <div className="space-y-6">
        {Object.entries(skills).map(([category, values]) => (
          <div key={category}>
            {/* Category */}
            <h3 className="text-text-primary mb-2 text-sm tracking-wider uppercase transition">
              {skillsTitles[category as keyof SkillsInformation]}
            </h3>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {values.map((skill) => (
                <span key={skill}>
                  <span className="border-border bg-bg-tertiary text-text-secondary hover:text-accent hover:border-accent hover:shadow-glow-8 text-xm rounded-md border px-2 py-1 transition-all duration-300">
                    {skill}
                  </span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsCard;
