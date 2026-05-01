import SkillsCard from "../components/SkillsCard";
import { useTranslation } from "react-i18next";

function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="px-6 py-16 md:px-12 md:py-24 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <h3 className="text-text-primary mb-10 text-2xl font-semibold">
          {t("portfolio.about.skills.title")}
        </h3>

        <SkillsCard />
      </div>
    </section>
  );
}

export default Skills;
