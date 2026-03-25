import { createBrowserRouter, createHashRouter } from 'react-router';

import MainLayout from '@/layouts/MainLayout';
import Home from '@/pages/Home';
import Dashboard from '@/pages/Dashboard';
import Login from '@/pages/Login';
import ProtectedRoute from '@/app/ProtectedRoute';

export const router = createHashRouter([
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
