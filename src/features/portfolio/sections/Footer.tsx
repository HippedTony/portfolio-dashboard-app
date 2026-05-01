import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  const handleContact = () => {
    const user = "tony.paniagua.7";
    const domain = "gmail.com";

    window.location.href = "mailto:" + user + "@" + domain;
  };

  return (
    <footer
      id="footer"
      className="border-border border-t px-6 py-16 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-text-primary text-2xl font-semibold">
          {t("portfolio.footer.title")}
        </h2>
        <p className="text-text-secondary mt-2">
          {t("portfolio.footer.subTitle")}
        </p>
        <button
          onClick={handleContact}
          className="bg-accent text-bg-primary hover:bg-accent-hover hover:shadow-glow-20 mt-6 w-fit rounded-xl px-6 py-3 font-medium transition-all duration-300"
        >
          {t("portfolio.footer.contactMe")}
        </button>

        <div className="from-accent-secondary via-accent to-accent-alt mx-auto mt-10 h-0.5 w-32 bg-linear-to-r opacity-70" />
      </div>
    </footer>
  );
}

export default Footer;
