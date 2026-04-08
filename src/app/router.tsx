import { createBrowserRouter } from "react-router";

// layouts
import MainLayout from "@/layouts/MainLayout";

// pages
import Home from "@/pages/Home";
import Dashboard from "@/pages/Dashboard";
import Login from "@/pages/Login";

// auth
import ProtectedRoute from "@/app/ProtectedRoute";
import AppLayout from "@/layouts/AppLayout";
import Calendar from "@/pages/Calendar";
import Missions from "@/pages/Missions";
import Reports from "@/pages/Reports";
import Monitoring from "@/pages/Monitoring";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/missions",
        element: <Missions />,
      },
      {
        path: "/reports",
        element: <Reports />,
      },

      {
        path: "/calendar",
        element: <Calendar />,
      },
      {
        path: "/monitoring",
        element: <Monitoring />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes, {
  basename: "/portfolio-dashboard-app/",
});
