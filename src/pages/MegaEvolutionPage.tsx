import React, { Fragment, useEffect } from "react";

import { ItemMegaStoneTable, PokemonMegaEvolutionTable } from "@/components";
import { PokemonDataById } from "@/data";
import { DEFAULT_TITLE, useImport, useLoadingAnchor } from "@/utils";

const MegaEvolutionPage: React.FC = () => {
  useEffect(() => {
    document.title = `超级进化一览 - ${DEFAULT_TITLE}`;
  }, []);

  const [megaEvolutionData, loading] = useImport(async () => {
    const itemFullData = (await import("@/data/i/detail")).ItemFullDataByName;
    return (await import("@/data/mega-evolution")).MegaEvolutionData.map((item) => ({
      ...item,
      normal: PokemonDataById[item.normal],
      mega: PokemonDataById[item.mega],
      stone: itemFullData[item.stone],
    }));
  });

  useLoadingAnchor([loading]);

  return (
    <Fragment key="pokemon-list">
      <div className="section">
        <h1>超级进化一览</h1>
      </div>

      <div className="section">
        <h2>超级石一览</h2>
        <ItemMegaStoneTable
          loading={loading}
          data={megaEvolutionData || []}
        />
      </div>

      <div className="section">
        <h2>种族值对比</h2>
        <PokemonMegaEvolutionTable
          loading={loading}
          data={megaEvolutionData || []}
        />
      </div>
    </Fragment>
  );
};

export default MegaEvolutionPage;
