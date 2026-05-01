import { useState } from "react";
import { useTranslation } from "react-i18next";
import { VerticalTimeline } from "react-vertical-timeline-component";

import ExperienceCard from "@/features/portfolio/components/ExperienceCard";

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
    <section className="border-border border-t px-6 py-16 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-text-primary mb-10 text-2xl font-semibold">
          {t("portfolio.about.experience")}
        </h2>

        <div className="mt-20 space-y-4">
          <VerticalTimeline lineColor="#fcee09">
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
    </section>
  );
}

export default About;
