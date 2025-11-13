import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.tsx';
import CreatePage from './pages/CreatePage.tsx';
import HomePage from './pages/HomePage.tsx';
import ToolDetailPage from './pages/ToolDetailPage.tsx';
import ToolIndexPage from './pages/ToolIndexPage.tsx';
import { LoginPage } from './pages/LoginPage.tsx';

const isLoggedIn = false;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>
      },
      {
        path: "createpage",
        element: <CreatePage />,
      },
      {
        path: "tools",
        element: <ToolIndexPage />
      },
      {
        path: "tool/:id", //ideally, it would work like "tool/{name}", try to implement later
        element: <ToolDetailPage />
      },
      {
        path: "index",
        element: <ToolIndexPage />
      }
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  isLoggedIn ? (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  ) : (
    <StrictMode>
      <RouterProvider router={createBrowserRouter([
        {
          path: "/",
          element: <App></App>,
          children: [
            {
              index: true,
              element: <LoginPage></LoginPage>
            }
          ]
        }
      ])} />
    </StrictMode>
  )
)
