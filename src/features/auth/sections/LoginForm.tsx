import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { IoEyeOutline, IoEyeOffSharp } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router";
import { fakeLogin } from "@/features/auth/services/auth.service";
import type { AppDispatch } from "@/app/store";
import { useDispatch } from "react-redux";
import { login } from "@/features/auth/authSlice";
import { saveAuth } from "@/shared/utils/authStorage";

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { t } = useTranslation();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState<number | null>(null);

  const handleLogin = async (e: React.SubmitEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fakeLogin(userInfo.email, userInfo.password);

      const { user_information, status, token } = res.data;

      dispatch(
        login({
          user: user_information,
          status,
          token,
        }),
      );

      saveAuth({
        isAuthenticated: true,
        token,
        status,
        user: user_information
      })

      navigate("/dashboard");
    } catch (error: any) {
      setError(error.code || "Login error");
      setLoading(false);
    }
  };

  const handleForgotPassword = () => {
    toast(t("dashboard.login.loginForm.loginToast"), {
      style: {
        width: "250px",
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      {error === 404 ? (
        <h2 className="-mt-4 mb-2 text-center text-base text-red-500">
          {t("dashboard.login.error")}
        </h2>
      ) : null}

      <form onSubmit={handleLogin}>
        <div className="grid gap-2">
          <div className="mb-3 text-start">
            <label htmlFor="email" className="text-lg leading-5">
              {t("dashboard.login.loginForm.email")}
            </label>
            <input
              id="email"
              type="email"
              value={userInfo.email}
              placeholder={t("dashboard.login.loginForm.emailPlaceholder")}
              className="placeholder:text-white-1/2 my-2 h-12.5 w-full rounded-lg border border-white bg-transparent px-3 text-white/50"
              onChange={(e) =>
                setUserInfo({ ...userInfo, email: e.target.value })
              }
            />
          </div>

          <div className="mb-2 text-start">
            <label htmlFor="password" className="text-lg leading-5">
              {t("dashboard.login.loginForm.password")}
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                value={userInfo.password}
                placeholder={t("dashboard.login.loginForm.passwordPlaceholder")}
                className="placeholder:text-white-1/2 my-2 h-12.5 w-full rounded-lg border border-white bg-transparent px-3 text-white/50"
                onChange={(e) =>
                  setUserInfo({ ...userInfo, password: e.target.value })
                }
              />

              <span className="absolute inset-y-0 right-2 grid w-8 place-content-center text-gray-700">
                {showPassword ? (
                  <IoEyeOffSharp
                    className="size-8 cursor-pointer rounded-full p-1.5 hover:bg-gray-50"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <IoEyeOutline
                    className="size-8 cursor-pointer rounded-full p-1.5 hover:bg-gray-50"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </span>
            </div>
          </div>

          <a
            onClick={handleForgotPassword}
            className="cursor-pointer text-end text-base text-white/30 transition-colors hover:text-white"
          >
            {t("dashboard.login.loginForm.forgottenPassword")}
          </a>

          <button
            className="group relative mx-auto mt-5 inline-flex w-fit items-center justify-center overflow-hidden rounded-sm bg-indigo-600 px-8 py-3 text-white"
            disabled={loading}
          >
            <span className="absolute -end-full transition-all group-hover:inset-e-4">
              <FaLongArrowAltRight />
            </span>

            <span className="text-sm font-medium transition-all group-hover:me-4">
              {loading
                ? t("dashboard.login.loginForm.loading")
                : t("dashboard.login.loginForm.login")}
            </span>
          </button>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
