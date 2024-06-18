import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";

import { MobileProvider } from "./store/MobileContext";
import { store } from "./store/store";

import "./styles/index.css";

import Header from "./components/Header/Header.jsx";
import Table from "./pages/Lessons/Table.jsx";
import ExamTable from "./pages/ExamTable.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/lessons-schedule",
    element: <Header />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Table /> },
      { path: "exams", element: <ExamTable /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <ThemeProvider>
        <MobileProvider>
          <Provider store={store}>
            <RouterProvider router={router} />
          </Provider>
        </MobileProvider>
      </ThemeProvider>
    </NextUIProvider>
  </React.StrictMode>
);
