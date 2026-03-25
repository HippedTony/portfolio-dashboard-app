import ThreeScene from '@/features/home/ThreeScene';
import { useTranslation } from 'react-i18next';

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="h-screen flex items-center justify-between px-10">
      <div>
        <h1 className="text-5xl font-bold">Tony Paniagua</h1>
        <p className="text-xl mt-4">
          {t("portfolio.hero.description")}
        </p>

        <div className="mt-6 flex gap-4">
          <button className="inline-block rounded border border-gray-700 px-5 py-3 font-medium text-gray-200 shadow-sm transition-colors hover:bg-gray-800 hover:text-white">
            {t("portfolio.hero.projects")}
          </button>
        </div>
      </div>

      <div className="w-125 h-125 hidden md:block">
        <ThreeScene />
      </div>
    </section>
  );
}

export default Hero;
