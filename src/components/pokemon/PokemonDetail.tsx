import React, { useEffect, useMemo } from "react";
import { DefaultTitle, DescriptionsCommonProps, getPokemonFullId, getPokemonFullName, renderTypes } from "../../utils";
import StatBar from "../StatBar";
import { useRequest } from "ahooks";
import { Move, MoveLevelUp, Pokemon, PokemonFull } from "../../types";
import { Descriptions, DescriptionsProps, Spin, TableColumnsType } from "antd";
import { MoveDataById } from "../../data/move";
import PokemonIcon from "./PokemonIcon";
import TypeEffectiveness from "../TypeEffectiveness";
import MoveTable from "../move/MoveTable";
import PokemonTable from "./PokemonTable";
import { PokemonData } from "../../data/pokemon";

enum ExpGrowth {
  "较快" = 0,
  "最快",
  "最慢",
  "较慢",
  "快",
  "慢",
}

const columnsLevelUp: TableColumnsType<MoveLevelUp & Move> = [
  {
    title: "等级",
    dataIndex: "level",
  },
  {
    title: "加强等级",
    dataIndex: "levelPlus",
  },
];

const getDescriptions = (pokemon: Pokemon, pokemonFull: PokemonFull | null): DescriptionsProps["items"] => [
  {
    key: "national",
    label: "全国图鉴",
    children: pokemon.national.toString().padStart(3, "0"),
  },
  {
    key: "dex",
    label: "密阿雷图鉴",
    children: pokemon.dex !== 0 ? pokemon.dex.toString().padStart(3, "0") : "—",
  },
  {
    key: "types",
    label: "属性",
    children: renderTypes(pokemon.types),
  },
  {
    key: "expGrowth",
    label: "成长速率",
    children: pokemonFull?.expGrowth ? ExpGrowth[pokemonFull?.expGrowth] || "—" : "—",
  },
  {
    key: "catchRate",
    label: "捕获率",
    children: pokemonFull?.catchRate || "—",
  },
  {
    key: "baseFriendship",
    label: "初始友好度",
    children: pokemonFull?.baseFriendship || "—",
  },
  {
    key: "description",
    label: "图鉴描述",
    children: pokemonFull?.description || "—",
    span: 3,
  },
];

const PokemonDetail: React.FC<{ data: Pokemon }> = ({ data: pokemon }) => {
  useEffect(() => {
    document.title = `宝可梦：${getPokemonFullName(pokemon)} - ${DefaultTitle}`;
  }, [pokemon]);

  const { data: pokemonFull = null, loading } = useRequest(
    async () => {
      const realData = await import(`../../data/p/${getPokemonFullId(pokemon)}.json`).then((mod) => mod.default);
      return realData as PokemonFull;
    },
    {
      onError: () => null,
    },
  );

  const allForms = useMemo(() => PokemonData.filter((p) => p.id === pokemon.id), [pokemon]);
  const movesLevelUp = useMemo(
    () =>
      pokemonFull?.movesLevelUp
        .map((move) => ({
          ...move,
          ...MoveDataById[move.move],
        }))
        .filter(Boolean),
    [pokemonFull],
  );
  const movesTM = useMemo(
    () =>
      pokemonFull?.movesTM
        .map((move) => ({
          ...move,
          ...MoveDataById[move.move],
        }))
        .filter(Boolean),
    [pokemonFull],
  );

  return (
    <div
      key="pokemon"
      className="bg-white rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="pt-12 text-center">
        <div className="flex gap-8 align-center justify-center mb-4">
          <PokemonIcon
            pokemon={pokemon}
            size={128}
          />
          <PokemonIcon
            pokemon={pokemon}
            size={128}
            shiny
          />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 my-4">{pokemon.name}</h1>
        <div className="flex justify-center space-x-2 my-4 text-xl text-gray-600">
          <div lang="ja">{pokemon.japanese}</div>
          <div>{pokemon.english}</div>
        </div>
        {pokemon.formName ? <div className="text-xl text-gray-600 mb-4">{pokemon.formName}</div> : null}
      </div>

      <div className="px-8 py-8">
        <h3 className="text-xl font-semibold text-gray-800 my-4">基本信息</h3>
        <Spin spinning={loading}>
          <Descriptions
            {...DescriptionsCommonProps}
            items={getDescriptions(pokemon, pokemonFull)}
          />
        </Spin>
        <h3 className="text-xl font-semibold text-gray-800 my-4">属性相克</h3>
        <TypeEffectiveness types={pokemon.types} />
        {pokemonFull?.evolutions ? (
          <>
            {/* <h3 className="text-xl font-semibold text-gray-800 my-4">进化</h3>
            <pre>{JSON.stringify(pokemonFull.evolutions, null, 2)}</pre> */}
          </>
        ) : null}
        <h3 className="text-xl font-semibold text-gray-800 my-4">全部形态</h3>
        <PokemonTable data={allForms} />
      </div>

      <div className="px-8 py-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">能力值</h2>
        <div className="text-center">总和：{pokemon.base.reduce((a, b) => a + b, 0)}</div>
        <div className="max-w-3xl mx-auto space-y-4">
          {["HP", "攻击", "防御", "特攻", "特防", "速度"].map((stat, index) => (
            <StatBar
              key={stat}
              name={stat}
              value={pokemon.base[index]}
            />
          ))}
        </div>
      </div>

      <div className="px-8 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">可学习招式</h2>
        <h3 className="text-xl font-semibold text-gray-800 my-4">等级提升</h3>
        <MoveTable<MoveLevelUp>
          extraColumns={columnsLevelUp}
          loading={loading}
          data={movesLevelUp}
        />
        <h3 className="text-xl font-semibold text-gray-800 my-4">招式学习器</h3>
        <MoveTable
          loading={loading}
          data={movesTM}
        />
      </div>
    </div>
  );
};

export default PokemonDetail;
