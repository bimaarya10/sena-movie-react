import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DetailPage from "./pages/DetailPage.jsx";
import SearchResultPage from "./pages/SearchResultPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement : <ErrorPage/>
  },
  {
    path: "/detail/:id",
    element: <DetailPage />,
  },
  {
    path : "/search/:data",
    element : <SearchResultPage/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
