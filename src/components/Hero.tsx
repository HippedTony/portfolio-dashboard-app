import ThreeScene from '@/features/home/ThreeScene';
import { useTranslation } from 'react-i18next';

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full h-[calc(100vh-74px)] mx-auto">
      <div className="absolute pointer-events-none z-10 inset-0 top-30 max-w-7xl mx-auto flex flex-row items-start gap-5 px-6 sm:px-16">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-purple-500" />
          <div className="w-1 h-40 bg-linear-to-b from-purple-500 to-transparent opacity-100  sm:h-80" />
        </div>

        <div>
          <h1 className="text-5xl font-bold">Tony Paniagua</h1>
          <p className="text-xl mt-4">{t('portfolio.hero.description')}</p>{' '}
          <div className="mt-6 flex gap-4">
            <button className="inline-block rounded border border-gray-700 px-5 py-3 font-medium text-gray-200 shadow-sm transition-colors hover:bg-gray-800 hover:text-white">
              {t('portfolio.hero.projects')}
            </button>
          </div>
        </div>
      </div>

      <ThreeScene />
    </section>
  );
}

export default Hero;
