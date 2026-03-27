import { useState } from "react";
import { useTranslation } from "react-i18next";
import ExperienceCard from "./ExperienceCard";
import SkillsCard from "./SkillsCard";

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  description: string;
};

function About() {
  const { t } = useTranslation();

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const isTouchDevice = window.matchMedia("(hover: none)").matches;

  const professionalExperience = t("portfolio.about.professionalExperience", {
    returnObjects: true,
  }) as ExperienceItem[];

  const handleClick = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-20">
      <h2 className="mb-6 text-3xl font-bold">{t("portfolio.about.title")}</h2>

      <p className="mb-12 max-w-3xl text-gray-300">
        {t("portfolio.about.description")}
      </p>

      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="mb-4 text-xl font-semibold text-blue-400">
            {t("portfolio.about.experience")}
          </h3>

          <div className="space-y-4">
            {professionalExperience.map((exp, i) => (
              <ExperienceCard
                key={i}
                exp={exp}
                isTouchDevice={isTouchDevice}
                isActive={activeIndex === i}
                onClick={() => handleClick(i)}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-purple-400">
            {t("portfolio.about.skills")}
          </h3>

          <SkillsCard />
        </div>
      </div>
    </section>
  );
}

export default About;
