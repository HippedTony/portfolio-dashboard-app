import { useState } from "react";

const skills = {
  core: [
    "React",
    "Next.js",
    "Node.js",
    "JavaScript/TypeScript",
    "React Three Fiber",
  ],
  technologies: [
    "Angular",
    "NestJS",
    "MongoDB",
    "SQL",
    "Firebase",
    "Redux Toolkit",
    "React Query",
    "React Native",
  ],
  tools: ["GitHub", "Vite", "WordPress"],
  extras: ["Three.js", "Flutter", "Python", "Java", "C#", "React Native"],
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
