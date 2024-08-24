import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
} from "react-router-dom";

import ExpandCollapse from "./components/Expand-collapse/ExpandCollapse";
import Home from "./components/Life-cycle/Home";
import Updating from "./components/Life-cycle/Updating";
import Theme from "./components/dark-mode/Theme";

const AppLayout = () => {
  const [light, setLight] = useState(true);

  const toggleTheme = () => {
    document.querySelector("html").classList.remove("light", "dark");
    if (light) {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.add("light");
    }
    setLight(!light);
  };

  return (
    <div className="flex justify-center dark:bg-gray-900">
      <div className="mt-3">
        <div className="flex w-[600px] justify-between">
          <Link to="/">
            <button className="border border-black px-3 py-1 dark:text-white dark:border-white">
              Home
            </button>
          </Link>
          <Link to="/expand">
            <button className="border border-black px-3 py-1 dark:text-white dark:border-white">
              Expand-collapse
            </button>
          </Link>
          <Link to="/count">
            <button className="border border-black px-3 py-1 dark:text-white dark:border-white">
              Count Page
            </button>
          </Link>

          <Link to="/theme">
            <button className="border border-black px-3 py-1 dark:text-white dark:border-white">
              Theme
            </button>
          </Link>
        </div>

        <div className="flex justify-center items-center mt-3 flex-col">
          <button
            className="border border-gray-400 px-3 py-1 dark:text-white"
            onClick={toggleTheme}
          >
            Switch Theme
          </button>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/expand",
        element: <ExpandCollapse />,
      },
      {
        path: "/count",
        element: <Updating />,
      },
      {
        path: "/theme",
        element: <Theme />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
