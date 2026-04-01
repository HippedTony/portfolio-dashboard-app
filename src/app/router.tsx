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

export const router = createBrowserRouter([
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
        path: "/calendar",
        element: <Calendar />,
      },
    ],
  },
]);
