import { Route, Routes as ReactRoutes } from "react-router-dom";

import { GLOBAL_ROUTES } from "@/data";
import * as pages from "@/pages";

const Routes = () => (
  <ReactRoutes>
    {Object.entries(GLOBAL_ROUTES).map(([key, value]) => {
      const PageComponent = pages[value] ?? pages.NotFoundPage;
      return (
        <Route
          key={key}
          path={key}
          element={<PageComponent />}
        />
      );
    })}
  </ReactRoutes>
);

export default Routes;
