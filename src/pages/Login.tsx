import { useDispatch } from "react-redux";
import { fakeLogin } from "@/services/auth.service";
import { useNavigate } from "react-router";
import { login } from "@/store/slices/authSlice";
import type { AppDispatch } from "@/store/store";
import { useState } from "react";
import InfoTooltip from "@/components/dashboard/InfoTooltip";
import LoginForm from "@/components/dashboard/LoginForm";
import { useTranslation } from "react-i18next";
import BackgroundAnimated from "@/components/dashboard/BackgroundAnimated";

function Login() {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<number | null>(null);

  const handleLogin = async (data: { email: string; password: string }) => {
    setError(null);
    setLoading(true);

    try {
      const res = await fakeLogin(data.email, data.password);

      const { user_information, status, token } = res.data;

      dispatch(
        login({
          user: user_information,
          status,
          token,
        }),
      );

      switch (status) {
        case "ACTIVE":
          navigate("/dashboard");
          break;

        case "CHANGE_PASSWORD":
          navigate("/change-password", {
            state: { user: user_information },
          });
          break;

        default:
          navigate("/");
      }
    } catch (error: any) {
      setError(error.code || "Login error");
      setLoading(false);
    }
  };

  return (
    <>
      <BackgroundAnimated
        component={
          <div className="bg-dashboard shadow-login absolute top-1/2 left-1/2 z-50 h-auto w-72 -translate-1/2 rounded-2xl px-5 py-6 text-center xxs:w-87.5">
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

            {error === 404 ? (
              <h2 className="-mt-4 mb-2 text-center text-base text-red-500">
                {t("dashboard.login.error")}
              </h2>
            ) : null}

            <LoginForm onSubmit={handleLogin} loading={loading} />
          </div>
        }
      />
    </>
  );
}

export default Login;
