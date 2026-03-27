import { useState } from "react";

const skills = {
  frontend: [
    "React",
    "Angular",
    "Next.js",
    "TypeScript",
    "Tailwind",
    "Bootstrap",
  ],
  state: ["Redux Toolkit", "Context API"],
  three: ["Three.js", "React Three Fiber", "Shaders"],
  backend: ["Node.js", "Express"],
};

function SkillsCard() {
  const [isActive, setIsActive] = useState(false);
  const isTouchDevice = window.matchMedia("(hover: none)").matches;

  return (
    <div
      className={`rounded-lg border bg-black p-4 font-mono text-sm text-green-400 transition ${
        isActive
          ? "border-purple-500"
          : "border-gray-80 hover:border-purple-500"
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
