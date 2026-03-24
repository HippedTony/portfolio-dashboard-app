import { createBrowserRouter } from 'react-router';

import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import ProtectedRoute from './ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'dashboard',
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
