import { FaInfoCircle } from "react-icons/fa";

interface InfoTooltipProps {
  content: React.ReactNode;
}

function InfoTooltip({ content }: InfoTooltipProps) {
  return (
    <div
      className="group relative flex justify-end"
      onClick={(e) => e.currentTarget.classList.toggle("active")}
    >
      <FaInfoCircle className="cursor-pointer text-gray-400 transition hover:text-indigo-500" />

      <div className="tooltip xs:right-2 xs:translate-x-1/2 xs:bottom-full xxs:translate-x-[55%] pointer-events-none absolute right-1/2 -bottom-3 z-20 mb-2 w-64 translate-x-[44%] scale-95 opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
        <div className="rounded-lg bg-gray-900 p-3 text-sm text-white shadow-lg">
          {content}
        </div>
      </div>
    </div>
  );
}

export default InfoTooltip;
