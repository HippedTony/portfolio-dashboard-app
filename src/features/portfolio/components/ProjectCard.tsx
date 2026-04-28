import droneDashboardImg from "@/assets/webp/drone_dashboard.webp";
import portfolioImg from "@/assets/webp/portfolio.webp";
import nutrimarketImg from "@/assets/webp/nutrimarket.webp";
import type { ProjectCardProps } from "@/shared/types/projects.type";

const imagesMap: Record<string, string> = {
  drone_dashboard: droneDashboardImg,
  portfolio: portfolioImg,
  nutrimarket: nutrimarketImg,
};

function ProjectCard({
  project,
  onClick,
  className,
  isTouchDevice,
  isActive,
}: ProjectCardProps) {
  return (
    <div
      className={`${className.container} bg-bg-secondary flex flex-col rounded-2xl border p-6 transition duration-300 ${
        isTouchDevice
          ? isActive
            ? "border-accent-hover"
            : "border-border"
          : "border-border hover:border-accent-hover"
      }`}
      onClick={onClick}
    >
      <div className="relative h-50 w-full">
        <img
          src={imagesMap[project.image]}
          alt="project_image"
          className="h-full w-full rounded-4xl object-cover"
        />
      </div>
      <h3 className={`mt-5 text-xl font-semibold ${className.title}`}>
        {project.name}
      </h3>

      <p className="text-text-secondary my-4 text-sm leading-relaxed">
        {project.description}
      </p>

      <div className="mt-auto flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
          <span key={index} className={className.technologies}>
            {tech}
          </span>
        ))}
      </div>

      <div className={className.extra}></div>
    </div>
  );
}

export default ProjectCard;
