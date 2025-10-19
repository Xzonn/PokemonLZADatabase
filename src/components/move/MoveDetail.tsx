import React, { useEffect, useMemo } from "react";
import { DefaultTitle, DescriptionsCommonProps, renderCategory, renderType } from "../../utils";
import { PokemonDataById } from "../../data/pokemon";
import { Move, MoveFull, Pokemon, PokemonLevelUp } from "../../types";
import { useRequest } from "ahooks";
import PokemonTable from "../pokemon/PokemonTable";
import { Descriptions, DescriptionsProps, TableColumnsType } from "antd";

const columnsLevelUp: TableColumnsType<Pokemon & PokemonLevelUp> = [
  {
    title: "等级",
    dataIndex: "level",
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
    document.title = `招式：${move.name} - ${DefaultTitle}`;
  }, [move]);

  const { data: moveFull = null, loading } = useRequest(
    async () => {
      const realData = await import(`../../data/m/${move.id.toString().padStart(3, "0")}.json`).then(
        (mod) => mod.default,
      );
      return realData as MoveFull;
    },
    {
      onError: () => null,
    },
  );

  const pokemonLevelUp = useMemo(
    () =>
      moveFull?.pokemonLevelUp
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
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{move.name}</h1>
        <div className="flex justify-center space-x-2 mb-6 text-xl text-gray-600">
          <div lang="ja">{move.japanese}</div>
          <div>{move.english}</div>
        </div>
      </div>

      <div className="px-8 py-8">
        <h3 className="text-xl font-semibold text-gray-800 my-4">基本信息</h3>
        <Descriptions
          items={getDescriptions(move)}
          {...DescriptionsCommonProps}
        />
      </div>

      <div className="px-8 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">可学习的宝可梦</h2>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">等级提升</h3>
        <PokemonTable<PokemonLevelUp>
          loading={loading}
          data={pokemonLevelUp}
          extraColumns={columnsLevelUp}
        />
        <h3 className="text-xl font-semibold text-gray-800 mb-4">招式学习器</h3>
        <PokemonTable
          loading={loading}
          data={pokemonTM}
        />
      </div>
    </div>
  );
};

export default MoveDetail;
