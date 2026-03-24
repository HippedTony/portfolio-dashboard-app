import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

function MainLayout() {
  return (
    <div>
      <Navbar />
      <div className="p-6">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
