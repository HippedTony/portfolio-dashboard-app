import { useState } from "react";

const skills = {
  languages: [
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS",
    "Python",
    "Dart",
    "Java",
    "SQL",
  ],
  webTechnologies: [
    "React.js",
    "Angular",
    "Next.js",
    "Three.js",
    "React Three Fiber",
    "Tailwind CSS",
    "Boostrap",
    "Material UI",
    "Radix UI",
    "Zustand",
    "Redux",
    "React Query",
    "Axios",
    "Vite",
    "WordPress",
  ],
  backendFrameworks: [
    "Node.js",
    "Express",
    "NestJS",
    "Django",
    "GraphQL",
    "Apollo",
    "tRPC",
  ],
  databases: ["MongoDB", "QSLite", "Firebase", "SQL Server"],
};

function SkillsCard() {
  const [isActive, setIsActive] = useState(false);
  const isTouchDevice = window.matchMedia("(hover: none)").matches;

  return (
    <div
      className={`mx-auto flex w-11/12 flex-col rounded-lg border bg-black p-4 font-mono text-sm text-green-400 transition md:w-2/3 md:p-10 lg:w-1/2 ${
        isActive
          ? "scale-[1.1] border-purple-500"
          : "border-gray-80 hover:scale-[1.1] hover:border-purple-500"
      }`}
      onClick={() => {
        if (isTouchDevice) {
          setIsActive((prev) => !prev);
        }
      }}
    >
      {"{"}
      <div className="ml-4">
        {Object.entries(skills).map(([key, values], i) => (
          <div key={i}>
            <span className="text-blue-400">{key}</span>: [
            {values.map((skill, index) => (
              <span key={index}>
                <span className="text-yellow-400">{skill}</span>
                {index < values.length - 1 && ", "}
              </span>
            ))}
            ],
          </div>
        ))}
      </div>
      {"}"}
    </div>
  );
}

export default SkillsCard;
