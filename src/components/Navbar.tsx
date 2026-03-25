import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/store/store';
import { NavLink, useNavigate } from 'react-router';
import { logout } from '@/store/slices/authSlice';
import { useTranslation } from 'react-i18next';
import LanguageDropdown from './LanguageDropdown';

function Navbar() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );
  const navigate = useNavigate();

  const handleLog = () => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      dispatch(logout());
    }
  };

  const toggleResume = () => {
    const resumeURL = '/portfolio-dashboard-app/Resume.pdf';
    window.open(resumeURL);
  };

  return (
    <nav className="w-full flex px-6 py-3 fixed top-0 z-20 bg-zinc-950 text-whitesm:px-16">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <NavLink
          className="rounded-md px-5 py-2.5 text-sm font-medium text-white hover:text-white/75"
          to={'/'}
        >
          {t('portfolio.navbar.home')}
        </NavLink>
        <div className="flex gap-4">
          {isAuthenticated && (
            <NavLink
              className="rounded-md px-5 py-2.5 text-sm font-medium text-white hover:text-white/75"
              to={'/dashboard'}
            >
              {t('portfolio.navbar.dashboard')}
            </NavLink>
          )}

          <button
            className="rounded-md px-5 py-2.5 text-sm font-medium text-white hover:text-white/75"
            onClick={handleLog}
          >
            {!isAuthenticated
              ? t('portfolio.navbar.login')
              : t('portfolio.navbar.logout')}
          </button>

          <button
            className="rounded-md px-5 py-2.5 text-sm font-medium text-white hover:text-white/75"
            onClick={toggleResume}
          >
            Resume
          </button>

          <div className="flex gap-4">
            <LanguageDropdown />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
