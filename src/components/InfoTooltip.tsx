import { FaInfoCircle } from 'react-icons/fa';

interface InfoTooltipProps {
  content: React.ReactNode;
}

function InfoTooltip({ content }: InfoTooltipProps) {
  return (
    <div
      className="relative group flex justify-end"
      onClick={(e) => e.currentTarget.classList.toggle('active')}
    >
      <FaInfoCircle className="text-gray-400 cursor-pointer hover:text-indigo-500 transition" />

      <div className="tooltip pointer-events-none absolute right-2 bottom-full z-20 mb-2 w-64 translate-x-1/2 scale-95 opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
        <div className="rounded-lg bg-gray-900 p-3 text-sm text-white shadow-lg">
          {content}
        </div>

        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 border-8 border-transparent border-t-gray-900"></div>
      </div>
    </div>
  );
}

export default InfoTooltip;
