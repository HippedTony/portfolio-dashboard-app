import i18n from "@/i18n";
import { useEffect, useState } from "react";

import usImage from '@/assets/images/us.jpg'
import mxImage from '@/assets/images/mx.jpg'

function LanguageToggle() {
  const [lang, setLang] = useState<"es" | "en">(
    i18n.language.startsWith("es") ? "es" : "en",
  );

  useEffect(() => {
    const current = i18n.language.startsWith("es") ? "es" : "en";
    setLang(current);
  }, []);

  const toggleLanguage = () => {
    const newLang = lang === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
    setLang(newLang);
  };

  const isEnglish = lang === "en";

  return (
    <button
      onClick={toggleLanguage}
      className="relative flex h-5.5 w-12 items-center rounded-full border border-gray-700 bg-gray-800 p-0.5 shadow-inner transition"
    >
      {/* Sliding circle */}
      <div
        className="absolute top-0.5 left-1 flex h-4 w-4 rounded-full bg-gray-100 shadow-[0_0_12px_rgba(59,130,246,0.6)] transition-all duration-300"
        style={{
          transform: `translateX(${isEnglish ? "125%" : "0%"})`,
        }}
      >
        <img src={isEnglish ? usImage : mxImage} className="rounded-full" />
      </div>

      {/* Labels (background) */}
      <div className="flex w-full justify-evenly px-0 text-xs">
        <span className={`${!isEnglish ? "text-white" : "text-gray-400"}`}>
          ES
        </span>
        <span className={`${isEnglish ? "text-white" : "text-gray-400"}`}>
          EN
        </span>
      </div>
    </button>
  );
}

export default LanguageToggle;
