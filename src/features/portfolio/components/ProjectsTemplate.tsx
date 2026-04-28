import { useTranslation } from "react-i18next";
import ProjectCard from "@/features/portfolio/components/ProjectCard";
import type { ProjectsInformation } from "@/shared/types/projects.type";

interface ProjectsTemplateProps {
  projects: ProjectsInformation[];
  isTouchDevice: boolean;
  activeIndex: number | null;
  handleClick: (index: number) => void;
  lgGridCols?: string;
  featured: boolean;
}

function ProjectsTemplate({
  projects,
  isTouchDevice,
  activeIndex,
  handleClick,
  lgGridCols,
  featured,
}: ProjectsTemplateProps) {
  const { t } = useTranslation();

  return (
    <div className="mx-auto max-w-7xl ">
      <h2 className="mb-10 text-3xl font-bold">
        {t("portfolio.projects.title")}
      </h2>

      <div className={`grid gap-6 md:grid-cols-2 ${lgGridCols}`}>
        {projects.map((project, i) => {
          const ProjectCardClassNames = featured
            ? {
                container: 'group',
                title: `mt-5 text-xl font-semibold transition ${
                  isTouchDevice
                    ? activeIndex === i
                      ? "text-accent-hover"
                      : ""
                    : "group-hover:text-accent-hover"
                }`,
                technologies: `rounded-md border bg-bg-tertiary px-2 py-1 text-sm text-gray-300 transition ${
                  isTouchDevice
                    ? activeIndex === i
                      ? "border-purple-500"
                      : "border-green-400"
                    : "border-green-400 group-hover:border-purple-500"
                }`,
                extra: `mt-6 h-0.5 bg-linear-to-r from-transparent via-accent-hover to-transparent transition ${
                  isTouchDevice
                    ? activeIndex === i
                      ? "opacity-100"
                      : "opacity-0"
                    : "opacity-0 group-hover:opacity-100"
                }`,
              }
            : {
                container: '',
                title: '',
                technologies: `rounded-md border border-border bg-bg-tertiary px-2 py-1 text-sm text-gray-300`,
                extra: '',
              };

          return (
            <ProjectCard
              key={i}
              project={project}
              isTouchDevice={isTouchDevice}
              isActive={activeIndex === i}
              onClick={() => handleClick(i)}
              className={ProjectCardClassNames}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProjectsTemplate;
