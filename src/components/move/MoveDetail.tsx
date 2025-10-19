import React, { useEffect, useMemo } from "react";
import { DefaultTitle, DescriptionsCommonProps, renderCategory, renderMoveLevel, renderType } from "../../utils";
import { PokemonDataById } from "../../data/pokemon";
import { Move, MoveFull, Pokemon, PokemonLevelUp } from "../../types";
import { useRequest } from "ahooks";
import PokemonTable from "../pokemon/PokemonTable";
import { Descriptions, DescriptionsProps, TableColumnsType } from "antd";

const columnsLevelUp: TableColumnsType<Pokemon & PokemonLevelUp> = [
  {
    title: "等级",
    dataIndex: "level",
    render: renderMoveLevel,
    sorter: (a, b) => a.level - b.level,
  },
];

const getDescriptions = (move: Move): DescriptionsProps["items"] => [
  {
    key: "type",
    label: "属性",
    children: renderType(move.type),
  },
  {
    key: "category",
    label: "分类",
    children: renderCategory(move.category),
  },
  {
    key: "power",
    label: "威力",
    children: move.category === "变化" ? "—" : move.power || "—",
  },
  {
    key: "wait",
    label: "等待时间",
    children: move.wait || "—",
  },
  {
    key: "description",
    label: "招式描述",
    children: move.description,
  },
];

const MoveDetail: React.FC<{ data: Move }> = ({ data: move }) => {
  useEffect(() => {
    document.title = `${move.name} - ${DefaultTitle}`;
  }, [move]);

  const { data: moveFull = null, loading } = useRequest(
    async () => {
      const realData = await import(`../../data/m/${move.id.toString().padStart(3, "0")}.json`).then(
        (mod) => mod.default,
      );
      return realData as MoveFull;
    },
    {
      refreshDeps: [move],
      onError: () => null,
    },
  );

  const pokemonLevelUp = useMemo(
    () =>
      moveFull?.pokemonLevelUp
        .filter((pokemon) => PokemonDataById[pokemon.fullId])
        .map((pokemon) => ({
          ...pokemon,
          ...PokemonDataById[pokemon.fullId],
        }))
        .filter(Boolean),
    [moveFull],
  );
  const pokemonTM = useMemo(
    () =>
      moveFull?.pokemonTM
        .filter((pokemon) => PokemonDataById[pokemon.fullId])
        .map((pokemon) => ({
          ...pokemon,
          ...PokemonDataById[pokemon.fullId],
        }))
        .filter(Boolean),
    [moveFull],
  );

  return (
    <div
      key="move"
      className="bg-white rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="pt-12 text-center">
        <h1>{move.name}</h1>
        <div className="flex justify-center space-x-2 mb-6 text-xl text-gray-600">
          <div lang="ja">{move.japanese}</div>
          <div>{move.english}</div>
        </div>
      </div>

      <div className="px-8 py-8">
        <h3>基本信息</h3>
        <Descriptions
          items={getDescriptions(move)}
          {...DescriptionsCommonProps}
        />
      </div>

      <div className="px-8 py-8">
        <h2>可学习的宝可梦</h2>
        <h3>等级提升</h3>
        <PokemonTable<PokemonLevelUp>
          loading={loading}
          data={pokemonLevelUp}
          extraColumns={columnsLevelUp}
        />
        {(pokemonTM?.length || 0) > 0 ? (
          <>
            <h3>招式学习器</h3>
            <PokemonTable
              loading={loading}
              data={pokemonTM}
            />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default MoveDetail;
