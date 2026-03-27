interface ExperienceCardProps {
  exp: {
    company: string;
    role: string;
    period: string;
    description: string;
  };
  isTouchDevice: boolean;
  isActive: boolean;
  onClick: () => void;
}

function ExperienceCard({
  exp,
  isTouchDevice,
  isActive,
  onClick,
}: ExperienceCardProps) {
  return (
    <div
      onClick={onClick}
      className={`rounded-lg border bg-gray-900 p-4 transition ${
        isTouchDevice
          ? isActive
            ? "border-blue-500"
            : "border-gray-800"
          : "border-gray-800 hover:border-blue-500"
      }`}
    >
      <p className="font-medium text-white">{exp.role}</p>
      <p className="mt-2 text-sm text-gray-300">
        {exp.company} * {exp.period}
      </p>
      <p className="mt-2 text-sm text-gray-300">{exp.description}</p>
    </div>
  );
}

export default ExperienceCard;
