import { Route, Routes as ReactRoutes } from "react-router-dom";

// import HomePage from "./pages/HomePage";
import MoveDetailPage from "./pages/MoveDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import PokemonDetailPage from "./pages/PokemonDetailPage";
import TypeDetailPage from "./pages/TypeDetailPage";

import { MoveListPage, PokemonListPage, TrainerListPage } from "@/pages";

const Routes = () => (
  <ReactRoutes>
    {/* <Route
      path="/"
      element={<HomePage />}
    />
    <Route
      path="/宝可梦一览"
      element={<PokemonListPage />}
    /> */}
    <Route
      path="/"
      element={<PokemonListPage />}
    />
    <Route
      path="/招式一览"
      element={<MoveListPage />}
    />
    <Route
      path="/训练家一览"
      element={<TrainerListPage />}
    />
    <Route
      path="/p/:name"
      element={<PokemonDetailPage />}
    />
    <Route
      path="/m/:name"
      element={<MoveDetailPage />}
    />
    <Route
      path="/t/:name"
      element={<TypeDetailPage />}
    />
    <Route
      path="*"
      element={<NotFoundPage />}
    />
  </ReactRoutes>
);

export default Routes;
