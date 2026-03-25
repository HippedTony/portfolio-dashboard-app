import { useDispatch } from 'react-redux';
import { fakeLogin } from '@/services/auth';
import { useNavigate } from 'react-router';
import { login } from '@/store/slices/authSlice';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    await fakeLogin();
    dispatch(login());
    navigate('/dashboard');
  };

  return <button onClick={handleLogin}>Login</button>;
}

export default Login;
