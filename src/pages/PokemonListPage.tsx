import React, { Fragment, useEffect } from "react";

import { PokemonTable } from "@/components";
import { PokemonData } from "@/data";
import { DEFAULT_TITLE } from "@/utils";

const PokemonListPage: React.FC = () => {
  useEffect(() => {
    document.title = `宝可梦一览 - ${DEFAULT_TITLE}`;
  }, []);

  return (
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
};

export default PokemonListPage;
