import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import { Link } from 'react-router';
import { logout } from '../store/slices/authSlice';

function Navbar() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );

  return (
    <nav className="flex gap-4 p-4 bg-gray-800 text-white">
      <Link to={'/'}>Home</Link>

      {isAuthenticated && <Link to={'/dashboard'}>Dashboard</Link>}

      {!isAuthenticated ? (
        <Link to={'/login'}>login</Link>
      ) : (
        <button onClick={() => dispatch(logout())}>Logout</button>
      )}
    </nav>
  );
}

export default Navbar;
