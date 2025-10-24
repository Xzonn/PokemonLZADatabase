import { Route, Routes as ReactRoutes } from "react-router-dom";

import {
  MoveDetailPage,
  MoveListPage,
  NotFoundPage,
  PokemonDetailPage,
  PokemonListPage,
  ResearchListPage,
  RoyaleListPage,
  TMListPage,
  TrainerListPage,
  TypeDetailPage,
} from "@/pages";

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
      path="/ＺＡ登峰战"
      element={<RoyaleListPage />}
    />
    <Route
      path="/茉蜜姬调查"
      element={<ResearchListPage />}
    />
    <Route
      path="/招式学习器一览"
      element={<TMListPage />}
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
