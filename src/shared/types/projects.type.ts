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
  title: string;
  technologies: string;
  extra: string;
};
