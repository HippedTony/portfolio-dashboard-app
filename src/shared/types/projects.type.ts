export type ProjectsInformation = {
  name: string;
  image: string;
  description: string;
  technologies: string[];
};

export type ProjectCardProps = {
  project: ProjectsInformation;
  isTouchDevice: boolean;
  isActive: boolean;
  onClick: () => void;
  className: ProjectCardClassNames;
};

export type ProjectCardClassNames = {
  container: string;
  technologies: string;
  extra: string;
};

export type HowIWorkInformation = {
  title: string;
  description: string;
}

export type SkillsInformation = {
  language: string;
  webTechnologies: string;
  backendFrameworks: string;
  database: string,
}
