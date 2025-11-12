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
import ToolSubmissionPage from './pages/ToolSubmissionPage.tsx';
import CustomToolSubmissionPage from './pages/CustomToolSubmissionPage.tsx';

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
      },
      {
        path: "submission",
        element: <ToolSubmissionPage />
      },
      {
        path: "submission2", // @todo: this should replace submission when backend is completed
        element: <CustomToolSubmissionPage />
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
