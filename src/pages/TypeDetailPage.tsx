import React, { Fragment, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";

import NotFoundPage from "./NotFoundPage";

import { MoveTable, PokemonTable, TypeEffects } from "@/components";
import { MoveData, PokemonData } from "@/data";
import { EPokemonType, PokemonType } from "@/types";
import { DEFAULT_TITLE, TypeIcon } from "@/utils";

const TypeDetailPageCore: React.FC<{ name: PokemonType }> = ({ name: typeName }) => {
  useEffect(() => {
    document.title = `属性：${typeName} - ${DEFAULT_TITLE}`;
  }, [typeName]);

  const allForms = useMemo(() => PokemonData.filter((p) => p.types.includes(typeName)), [typeName]);
  const allMoves = useMemo(() => MoveData.filter((m) => m.type === typeName), [typeName]);

  return (
    <Fragment key="move">
      <div className="block">
        <h1>
          <TypeIcon type={typeName} />
        </h1>
      </div>

      <div className="block">
        <h2>属性相克</h2>
        <h3>{typeName}属性招式攻击其他属性宝可梦</h3>
        <TypeEffects
          types={[typeName]}
          isAttack
        />
        <h3>其他属性招式攻击{typeName}属性宝可梦</h3>
        <TypeEffects types={[typeName]} />
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

const TypeDetailPage: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  return EPokemonType.includes((name || "") as PokemonType) ? (
    <TypeDetailPageCore name={name as PokemonType} />
  ) : (
    <NotFoundPage />
  );
};

export default TypeDetailPage;
