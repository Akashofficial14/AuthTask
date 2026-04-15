import React, { Profiler } from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import AuthLayout from "../Layout/AuthLayout";
import Homelayout from "../layout/Homelayout";
import ProtectedRoute from "../components/ProtectedRoute";
import PublicRoute from "../components/PublicRoute";
const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute/>,
      children: [
        {
          index: true,
          element: <AuthLayout />,
        },
      ],
    },
    {
      path: "/profile",
      element: <ProtectedRoute />,
      children: [
        {
          index: true,
          element: <Homelayout />,
        },
    ]
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouter;
