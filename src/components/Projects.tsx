import { useTranslation } from 'react-i18next';

type Projects = {
  name: string;
  description: string;
  technologies: string[];
};

function Projects() {
  const { t } = useTranslation();

  const projects = t('portfolio.projects.items', {
    returnObjects: true,
  }) as Projects[];

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-10">
        {t('portfolio.projects.title')}
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <div
            key={i}
            className="group p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-blue-500 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition">
              {project.name}
            </h3>

            <p className="text-gray-400 text-sm mt-3 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="text-sm px-2 py-1 bg-gray-800 text-gray-300 rounded-md border border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 h-0.5 bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
