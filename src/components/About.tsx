import { useTranslation } from 'react-i18next';

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  description: string;
};

const skills = {
  frontend: [
    'React',
    'Angular',
    'Next.js',
    'TypeScript',
    'Tailwind',
    'Bootstrap',
  ],
  state: ['Redux Toolkit', 'Context API'],
  three: ['Three.js', 'React Three Fiber', 'Shaders'],
  backend: ['Node.js', 'Express'],
};

function About() {
  const { t } = useTranslation();

  const professionalExperience = t('portfolio.about.professionalExperience', {
    returnObjects: true,
  }) as ExperienceItem[];

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-6">{t('portfolio.about.title')}</h2>

      <p className="max-w-3xl text-gray-300 mb-12">
        {t('portfolio.about.description')}
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-400">
            {t('portfolio.about.experience')}
          </h3>

          <div className="space-y-4">
            {professionalExperience.map((exp, i) => (
              <div
                key={i}
                className="p-4 bg-gray-900 rounded-lg border border-gray-800 hover:border-blue-500 transition"
              >
                <p className="text-white font-medium">{exp.role}</p>
                <p className="text-sm text-gray-300 mt-2">
                  {exp.company} * {exp.period}
                </p>
                <p className="text-sm text-gray-300 mt-2">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-purple-400">
            {t('portfolio.about.skills')}
          </h3>

          <div className="bg-black text-green-400 font-mono text-sm p-4 rounded-lg border border-gray-800 hover:border-purple-500 transition">
            {'{'}
            <div className="ml-4">
              {Object.entries(skills).map(([key, values], i) => (
                <div key={i}>
                  <span className="text-blue-400">{key}</span>: [
                  {values.map((skill, index) => (
                    <span key={index}>
                      <span className="text-yellow-400">{skill}</span>
                      {index < values.length - 1 && ', '}
                    </span>
                  ))}
                  ],
                </div>
              ))}
            </div>
            {'}'}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
