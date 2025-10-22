import React, { Fragment, useEffect, useMemo } from "react";

import { TypeEffectiveness } from "../TypeEffects";
import { MoveTable } from "../move";
import { PokemonTable } from "../pokemon/PokemonTable";

import { MoveData, PokemonData } from "@/data";
import { PokemonType } from "@/types";
import { DefaultTitle, renderType } from "@/utils";

export const TypeDetail: React.FC<{ name: PokemonType }> = ({ name: typeName }) => {
  useEffect(() => {
    document.title = `属性：${typeName} - ${DefaultTitle}`;
  }, [typeName]);

  const allForms = useMemo(() => PokemonData.filter((p) => p.types.includes(typeName)), [typeName]);
  const allMoves = useMemo(() => MoveData.filter((m) => m.type === typeName), [typeName]);

  return (
    <Fragment key="move">
      <div className="block">
        <h1>{renderType(typeName)}</h1>
      </div>

      <div className="block">
        <h2>属性相克</h2>
        <h3>{typeName}属性招式攻击其他属性宝可梦</h3>
        <TypeEffectiveness
          types={[typeName]}
          isAttack
        />
        <h3>其他属性招式攻击{typeName}属性宝可梦</h3>
        <TypeEffectiveness types={[typeName]} />
      </div>

      <div className="block">
        <h2>此属性的宝可梦</h2>
        <PokemonTable data={allForms} />
      </div>

      <div className="block">
        <h2>此属性的招式</h2>
        <MoveTable data={allMoves} />
      </div>
    </Fragment>
  );
};
