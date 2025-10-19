import React, { useEffect, useMemo } from "react";
import { DefaultTitle, renderType } from "../../utils";
import { PokemonData } from "../../data/pokemon";
import { PokemonType } from "../../types";
import PokemonTable from "../pokemon/PokemonTable";
import { MoveData } from "../../data/move";
import { MoveTable } from "../move";
import TypeEffectiveness from "../TypeEffectiveness";

const TypeDetail: React.FC<{ name: PokemonType }> = ({ name: typeName }) => {
  useEffect(() => {
    document.title = `属性：${typeName} - ${DefaultTitle}`;
  }, [typeName]);

  const allForms = useMemo(() => PokemonData.filter((p) => p.types.includes(typeName)), [typeName]);
  const allMoves = useMemo(() => MoveData.filter((m) => m.type === typeName), [typeName]);

  return (
    <div
      key="move"
      className="bg-white rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="pt-12 text-center">
        <h1>{renderType(typeName)}</h1>
      </div>

      <div className="px-8 py-8">
        <h2>属性相克</h2>
        <h3>{typeName}属性招式攻击其他属性宝可梦</h3>
        <TypeEffectiveness
          types={[typeName]}
          isAttack
        />
        <h3>其他属性招式攻击{typeName}属性宝可梦</h3>
        <TypeEffectiveness types={[typeName]} />
      </div>

      <div className="px-8 py-8 bg-gray-50">
        <h2>此属性的宝可梦</h2>
        <PokemonTable data={allForms} />
      </div>

      <div className="px-8 py-8">
        <h2>此属性的招式</h2>
        <MoveTable data={allMoves} />
      </div>
    </div>
  );
};

export default TypeDetail;
