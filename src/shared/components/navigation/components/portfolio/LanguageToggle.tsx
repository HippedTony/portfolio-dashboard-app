import i18n from "@/i18n";
import { useEffect, useState } from "react";

import usImage from "@/assets/images/us.jpg";
import mxImage from "@/assets/images/mx.jpg";

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
      className="border-border bg-bg-secondary hover:border-accent hover:shadow-glow-10 relative mt-1 flex h-6 w-14 items-center rounded-full border p-0.5 transition-all duration-300"
    >
      {/* Sliding circle */}
      <div
        className="bg-bg-primary shadow-glow-10 absolute top-px left-1 flex size-5 items-center justify-center rounded-full transition-all duration-300"
        style={{
          transform: `translateX(${isEnglish ? "130%" : "0%"})`,
        }}
      >
        <img
          src={isEnglish ? usImage : mxImage}
          className="size-4 rounded-full object-cover"
        />
      </div>

      {/* Labels (background) */}
      <div className="flex w-full justify-between px-2 text-[10px] font-medium">
        <span
          className={`transition ${!isEnglish ? "text-accent" : "text-text-tertiary"}`}
        >
          ES
        </span>
        <span
          className={`transition ${isEnglish ? "text-accent" : "text-text-tertiary"}`}
        >
          EN
        </span>
      </div>
    </button>
  );
}

export default LanguageToggle;
