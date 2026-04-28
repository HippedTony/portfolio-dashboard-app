import { useState } from "react";
import { useTranslation } from "react-i18next";
import ProjectsTemplate from "../components/ProjectsTemplate";
import type { ProjectsInformation } from "@/shared/types/projects.type";

function FeaturedProjects() {
  const { t } = useTranslation();

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const isTouchDevice = window.matchMedia("(hover: none)").matches;

  const projects = t("portfolio.featuredProjects.items", {
    returnObjects: true,
  }) as ProjectsInformation[];

  const handleClick = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };
  return (
    <section
      id="featuredProjects"
      className="px-6 py-16 md:px-12 md:py-24 lg:px-24"
    >
      <ProjectsTemplate
        projects={projects}
        isTouchDevice={isTouchDevice}
        activeIndex={activeIndex}
        handleClick={handleClick}
        featured={true}
      />
    </section>
  );
}

export default FeaturedProjects;
