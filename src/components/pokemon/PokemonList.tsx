import React, { Fragment } from "react";

import { PokemonTable } from "./PokemonTable";

import { PokemonData } from "@/data";

export const PokemonList: React.FC = () => (
  <Fragment key="pokemon-list">
    <div className="block">
      <h1>宝可梦一览</h1>
    </div>

    <div className="block">
      <PokemonTable
        data={PokemonData}
        showStats
      />
    </div>
  </Fragment>
);
