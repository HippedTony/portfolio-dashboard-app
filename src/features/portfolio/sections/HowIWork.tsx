import type { HowIWorkInformation } from "@/shared/types/projects.type";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function HowIWork() {
  const { t } = useTranslation();

  const steps = t("portfolio.howIWork.steps", {
    returnObjects: true,
  }) as HowIWorkInformation[];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const isTouchDevice = window.matchMedia("(hover: none)").matches;

  const handleClick = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="howIWork"
      className="border-border border-t px-6 py-16 md:px-12 md:py-24 lg:px-24"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="text-text-primary mb-10 text-2xl font-semibold">
          {t("portfolio.howIWork.title")}
        </h2>
        <div className="relative">
          {/* Línea vertical (mobile) */}
          <div className="via-accent from-accent/40 absolute top-5 -left-1 h-full w-0.5 bg-linear-to-b to-transparent md:hidden" />
          {/* Línea horizontal (desktop) */}
          <div className="via-accent absolute top-5 left-0 hidden h-0.5 w-full bg-linear-to-r from-transparent to-transparent md:block" />

          <div className="flex flex-col gap-10 md:grid md:grid-cols-4 md:gap-6">
            {steps.map((step, index) => (
              <div
                key={step.title}
                onClick={() => {
                  if (isTouchDevice) handleClick(index);
                }}
                className="group relative text-center md:block"
              >
                {/* Nodo */}
                <div
                  className={`bg-bg-primary relative z-10 mx-auto mb-4 flex size-10 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                    isTouchDevice
                      ? activeIndex === index
                        ? "border-accent shadow-glow-15"
                        : "border-border"
                      : "border-border group-hover:border-accent group-hover:shadow-glow-15"
                  }`}
                >
                  <span
                    className={`text-sm font-medium transition ${
                      isTouchDevice
                        ? activeIndex === index
                          ? "text-accent"
                          : "text-text-secondary"
                        : "text-text-secondary group-hover:text-accent"
                    }`}
                  >
                    {index + 1}
                  </span>
                </div>

                {/* Contenido */}
                <div className="md:text-center">
                  <h4
                    className={`mb-1 font-medium transition ${
                      isTouchDevice
                        ? activeIndex === index
                          ? "text-accent"
                          : "text-text-primary"
                        : "text-text-primary group-hover:text-accent"
                    }`}
                  >
                    {step.title}
                  </h4>

                  <p className="text-text-secondary text-sm">
                    {step.description}
                  </p>
                </div>

                {/* Decorative line (cyberpunk) */}
                <div
                  className={`from-accent-secondary to-accent-alt mx-auto mt-4 h-0.5 bg-linear-to-r transition-all duration-300 ${
                    isTouchDevice
                      ? activeIndex === index
                        ? "w-12"
                        : "w-0"
                      : "w-0 group-hover:w-12"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowIWork;
