import React from "react";
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

const AppLayout = () => {
  return (
    <div>
      <div>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/expand">
          <button>Expand-collapse</button>
        </Link>
        <Link to="/count">
          <button>Count Page</button>
        </Link>
      </div>
      <Outlet />
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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
