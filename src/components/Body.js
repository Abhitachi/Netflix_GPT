import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import Watch from "./Watch";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/watch/:id",
      element: <Watch />,
    },
  ]);

  return (
    <div className="scrollbar-hide">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
