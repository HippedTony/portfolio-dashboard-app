import ThreeScene from "@/features/home/ThreeScene";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative mx-auto h-[calc(100vh-74px)] w-full">
      <div className="pointer-events-none absolute inset-0 top-30 z-10 mx-auto flex max-w-7xl flex-row items-start gap-5 px-6 sm:px-16">
        <div className="mt-3 flex flex-col items-center justify-center sm:mt-5">
          <div className="h-5 w-5 rounded-full bg-purple-500" />
          <div className="h-40 w-1 bg-linear-to-b from-purple-500 to-transparent opacity-100 sm:h-80" />
        </div>

        <div>
          <h1 className="xs:text-4xl text-3xl font-bold sm:text-5xl lg:text-6xl">
            Tony Paniagua
          </h1>
          <p className="xs:text-xl mt-4 text-base sm:text-2xl lg:text-3xl">
            {t("portfolio.hero.description")}
          </p>
        </div>
      </div>

      <ThreeScene />

      <div className="absolute bottom-10 flex w-full items-center justify-center">
        <div className="flex h-16 w-8.75 items-start justify-center rounded-3xl border-4 border-[#aaa6c3] p-2">
          <div className="animate-bounce-y mb-1 h-3 w-3 rounded-full bg-[#aaa6c3]"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
