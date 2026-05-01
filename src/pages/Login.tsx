import InfoTooltip from "@/features/auth/components/InfoTooltip";
import LoginForm from "@/features/auth/sections/LoginForm";
import { useTranslation } from "react-i18next";
import BackgroundAnimated from "@/features/auth/sections/BackgroundAnimated";

function Login() {
  const { t } = useTranslation();
  
  return (
    <>
      <BackgroundAnimated
        component={
          <div className="bg-login shadow-login absolute top-1/2 left-1/2 z-10 h-auto w-72 -translate-1/2 rounded-2xl px-5 py-6 text-center xxs:w-87.5">
            <InfoTooltip
              content={
                <div>
                  <p className="mb-1 font-semibold">
                    {t("demoInformation.infoTooltip.demoCredentials")}
                  </p>
                  <p>
                    {t("demoInformation.infoTooltip.email")}:{" "}
                    <span className="text-indigo-400">tony@pan.com</span>
                  </p>
                  <p>
                    {t("demoInformation.infoTooltip.password")}:{" "}
                    <span className="text-indigo-400">admin123</span>
                  </p>
                </div>
              }
            />

            <h1 className="mb-7.5 text-2xl leading-5 text-white">
              {t("dashboard.login.title")}
            </h1>

            <LoginForm />
          </div>
        }
      />
    </>
  );
}

export default Login;
