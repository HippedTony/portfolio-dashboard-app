import { useTranslation } from "react-i18next";
import ProjectCard from "@/features/portfolio/components/ProjectCard";
import { useState } from "react";

type Projects = {
  name: string;
  image: string;
  description: string;
  technologies: string[];
};

function Projects() {
  const { t } = useTranslation();

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const isTouchDevice = window.matchMedia("(hover: none)").matches;

  const projects = t("portfolio.projects.items", {
    returnObjects: true,
  }) as Projects[];

  const handleClick = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-20">
      <h2 className="mb-10 text-3xl font-bold">
        {t("portfolio.projects.title")}
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            project={project}
            isTouchDevice={isTouchDevice}
            isActive={activeIndex === i}
            onClick={() => handleClick(i)}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
