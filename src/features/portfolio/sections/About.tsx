import { useState } from "react";
import { useTranslation } from "react-i18next";
import ExperienceCard from "@/features/portfolio/components/ExperienceCard";
import SkillsCard from "@/features/portfolio/components/SkillsCard";
import { VerticalTimeline } from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  icon: string;
  description: string[];
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
    <section className="py-20 px-4 md:px-6 lg:px-8">
      <h2 className="mb-6 text-3xl font-bold">{t("portfolio.about.title")}</h2>

      <p className="mb-12 max-w-3xl text-gray-300">
        {t("portfolio.about.description")}
      </p>

      <div className="">
        <div>
          <h3 className="flex justify-center text-5xl font-semibold text-blue-400 md:text-6xl">
            {t("portfolio.about.experience")}
          </h3>

          <div className="mt-20 space-y-4">
            <VerticalTimeline>
              {professionalExperience.map((exp, i) => (
                <ExperienceCard
                  key={i}
                  exp={exp}
                  isTouchDevice={isTouchDevice}
                  isActive={activeIndex === i}
                  onClick={() => handleClick(i)}
                />
              ))}
            </VerticalTimeline>
          </div>
        </div>

        <div>
          <h3 className="my-10 flex justify-center text-6xl font-semibold text-purple-400">
            {t("portfolio.about.skills")}
          </h3>

          <SkillsCard />
        </div>
      </div>
    </section>
  );
}

export default About;
