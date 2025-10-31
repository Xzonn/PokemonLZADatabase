import { Route, Routes as ReactRoutes } from "react-router-dom";

import routes from "@/data/routes.json";
import * as pages from "@/pages";

const Routes = () => (
  <ReactRoutes>
    {Object.entries(routes).map(([key, value]) => {
      const PageComponent = pages[value as keyof typeof pages];
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
