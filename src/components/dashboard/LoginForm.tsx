import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { IoEyeOutline, IoEyeOffSharp } from 'react-icons/io5';
import { FaLongArrowAltRight } from 'react-icons/fa';

interface LoginFormProps {
  onSubmit: (data: { email: string; password: string }) => void;
  loading: boolean;
}

function LoginForm({ onSubmit, loading }: LoginFormProps) {
  const { t } = useTranslation();
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    onSubmit(userInfo);
  };

  const handleForgotPassword = () => {
    toast(t('dashboard.login.loginForm.loginToast'), {
      style: {
        width: '250px',
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <form onSubmit={handleSubmit}>
        <div className="grid gap-2">
          <div className="mb-3 text-start">
            <label htmlFor="email" className="text-lg leading-5">
              {t('dashboard.login.loginForm.email')}
            </label>
            <input
              id="email"
              type="email"
              value={userInfo.email}
              placeholder={t('dashboard.login.loginForm.emailPlaceholder')}
              className="w-full h-12.5 bg-transparent text-white/50 rounded-lg border border-white px-3 my-2 placeholder:text-white-1/2"
              onChange={(e) =>
                setUserInfo({ ...userInfo, email: e.target.value })
              }
            />
          </div>

          <div className="mb-2 text-start">
            <label htmlFor="password" className="text-lg leading-5">
              {t('dashboard.login.loginForm.password')}
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                id="password"
                value={userInfo.password}
                placeholder={t('dashboard.login.loginForm.passwordPlaceholder')}
                className="w-full h-12.5 bg-transparent text-white/50 rounded-lg border border-white px-3 my-2 placeholder:text-white-1/2"
                onChange={(e) =>
                  setUserInfo({ ...userInfo, password: e.target.value })
                }
              />

              <span className="absolute inset-y-0 right-2 grid w-8 place-content-center text-gray-700">
                {showPassword ? (
                  <IoEyeOffSharp
                    className="size-8 cursor-pointer p-1.5 rounded-full hover:bg-gray-50"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <IoEyeOutline
                    className="size-8 cursor-pointer p-1.5 rounded-full hover:bg-gray-50"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </span>
            </div>
          </div>

          <a
            onClick={handleForgotPassword}
            className="text-white/30 text-base text-end cursor-pointer hover:text-white transition-colors"
          >
            {t('dashboard.login.loginForm.forgottenPassword')}
          </a>

          <button
            className="group relative w-fit mx-auto mt-5 inline-flex items-center justify-center overflow-hidden rounded-sm bg-indigo-600 px-8 py-3 text-white"
            disabled={loading}
          >
            <span className="absolute -end-full transition-all group-hover:inset-e-4">
              <FaLongArrowAltRight />
            </span>

            <span className="text-sm font-medium transition-all group-hover:me-4">
              {loading
                ? t('dashboard.login.loginForm.loading')
                : t('dashboard.login.loginForm.login')}
            </span>
          </button>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
