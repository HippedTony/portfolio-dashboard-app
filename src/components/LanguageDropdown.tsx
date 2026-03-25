import i18n from '@/i18n';
import { useEffect, useState } from 'react';

const languages: Record<string, string> = {
  en: 'EN',
  es: 'ES',
};

function LanguageDropdown() {
  const [open, setOpen] = useState(false);

  const currentLang = i18n.language.startsWith('es') ? 'es' : 'en';

  const otherLang = currentLang === 'es' ? 'en' : 'es';

  const handleOpen = (e: { stopPropagation: () => void; }) => {
    e.stopPropagation();
    setOpen(!open);
  };

  const handleChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = () => setOpen(false);
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left">
      <button
        className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg border border-gray-700 hover:border-blue-500 transition"
        onClick={handleOpen}
      >
        {languages[currentLang]}
        <span className="text-sm">▼</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-full bg-gray-900 border border-gray-700 rounded-lg shadow-lg animate-[fadeIn]">
          <button
            className="w-full px-4 py-2 text-left text-white rounded-lg hover:bg-gray-800 transition"
            onClick={() => handleChange(otherLang)}
          >
            {languages[otherLang]}
          </button>
        </div>
      )}
    </div>
  );
}

export default LanguageDropdown;
