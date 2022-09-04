import { useRoutes } from "react-router-dom";

import Home from "../pages/Home";
import MoviesPage from "../pages/Movies";
import ViewMoviePage from "../pages/ViewMoviePage";
import PageNotFound from "../pages/PageNotFound";

export default function Routes() {
  return useRoutes([
    {
      path: "/",
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/movies",
          children: [
            { element: <MoviesPage />, index: true },
            {
              element: <ViewMoviePage />,
              path: "/movies/:id",
            },
          ],
        },
        {
          path: "*",
          element: <PageNotFound />,
        },
      ],
    },
  ]);
}
