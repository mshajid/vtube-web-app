import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import MainForm from "./Components/MainForm.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/add-videos",
        element: <MainForm />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="font-Jakarta bg-[#0f0f0f] min-h-screen">
    <RouterProvider router={router} />
  </div>
);
