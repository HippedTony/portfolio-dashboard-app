import droneDashboardImg from "@/assets/drone_dashboard.png";
import portfolioImg from "@/assets/portfolio.png";
import nutrimarketImg from "@/assets/nutrimarket.png";

const imagesMap: Record<string, string> = {
  drone_dashboard: droneDashboardImg,
  portfolio: portfolioImg,
  nutrimarket: nutrimarketImg,
};

interface ProjectCardProps {
  project: {
    name: string;
    image: string;
    description: string;
    technologies: string[];
  };
  isTouchDevice: boolean;
  isActive: boolean;
  onClick: () => void;
}

function ProjectCard({
  project,
  isTouchDevice,
  isActive,
  onClick,
}: ProjectCardProps) {
  return (
    <div
      className={`group rounded-xl border bg-gray-900 p-6 transition-all duration-300 ${
        isTouchDevice
          ? isActive
            ? "border-blue-500"
            : "border-gray-800"
          : "border-gray-800 hover:border-blue-500"
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
      <h3
        className={`mt-5 text-xl font-semibold transition ${
          isTouchDevice
            ? isActive
              ? "text-blue-400"
              : ""
            : "group-hover:text-blue-400"
        }`}
      >
        {project.name}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-gray-400">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className={`rounded-md border bg-gray-800 px-2 py-1 text-sm text-gray-300 transition ${
              isTouchDevice
                ? isActive
                  ? "border-purple-500"
                  : "border-green-400"
                : "border-green-400 group-hover:border-purple-500"
            }`}
          >
            {tech}
          </span>
        ))}
      </div>

      <div
        className={`mt-6 h-0.5 bg-linear-to-r from-transparent via-blue-500 to-transparent transition ${
          isTouchDevice
            ? isActive
              ? "opacity-100"
              : "opacity-0"
            : "opacity-0 group-hover:opacity-100"
        }`}
      ></div>
    </div>
  );
}

export default ProjectCard;
