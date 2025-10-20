import React, { Fragment } from "react";

import PokemonTable from "./PokemonTable";

import { PokemonData } from "@/data/pokemon";

const PokemonList: React.FC = () => (
  <Fragment key="pokemon-list">
    <div className="text-center px-8 py-8">
      <div className="mb-12">
        <h1>宝可梦一览</h1>
      </div>

      <div>
        <PokemonTable
          data={PokemonData}
          showStats
        />
      </div>
    </div>
  </Fragment>
);

export default PokemonList;
