// src/pages/PokemonDetailPage.tsx

import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { getPokemonFullId, MoveCategoryFilters, PokemonTypeFilters, renderType, renderTypes } from "../utils";
import NotFoundPage from "./NotFoundPage";
import { PokemonDataByName } from "../data/pokemon";
import StatBar from "../components/StatBar";
import { useRequest } from "ahooks";
import { Move, MoveLevelUp, Pokemon, PokemonFull } from "../types";
import { Table, TableColumnsType } from "antd";
import { MoveDataById } from "../data/move";
import PokemonIcon from "../components/PokemonIcon";

const columnsMove: TableColumnsType<Move> = [
  {
    title: "招式",
    dataIndex: "name",
    render: (_, record) => (
      <Link
        to={`/m/${record.name}`}
        className="text-blue-600 hover:underline"
      >
        {record.name}
      </Link>
    ),
  },
  {
    title: "属性",
    dataIndex: "type",
    render: (type) => renderType(type),
    filters: PokemonTypeFilters,
    onFilter: (value, record) => record.type === value,
  },
  {
    title: "分类",
    dataIndex: "category",
    filters: MoveCategoryFilters,
    onFilter: (value, record) => record.category === value,
  },
  {
    title: "威力",
    dataIndex: "power",
    render: (power, row) => (row.category === "变化" || power === 0 ? "—" : power),
    sorter: (a, b) => a.power - b.power,
  },
  {
    title: "等待时间",
    dataIndex: "wait",
    sorter: (a, b) => a.wait - b.wait,
  },
  {
    title: "说明",
    dataIndex: "description",
  },
];

const columnsLevelUp: TableColumnsType<MoveLevelUp & Move> = [
  {
    title: "等级",
    dataIndex: "level",
  },
  {
    title: "加强等级",
    dataIndex: "levelPlus",
  },
  ...(columnsMove as TableColumnsType<MoveLevelUp & Move>),
];

const columnsTM: TableColumnsType<Move> = [...(columnsMove as TableColumnsType<Move>)];

const PokemonDetailPage: React.FC<{ data: Pokemon }> = ({ data: pokemon }) => {
  const { data: pokemonFull = null } = useRequest(
    async () => {
      const realData = await import(`../data/p/${getPokemonFullId(pokemon)}.json`).then((mod) => mod.default);
      return realData as PokemonFull;
    },
    {
      onError: () => null,
    },
  );

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
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="pt-12 text-center">
        <PokemonIcon
          pokemon={pokemon}
          size={128}
        />
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{pokemon.name}</h1>
        <div className="flex  justify-center space-x-2 mb-6 text-xl text-gray-600">
          <div>{pokemon.japanese}</div>
          <div>{pokemon.english}</div>
        </div>
        <div className="text-xl text-gray-600 mb-4">{pokemon.formName}</div>
        <div className="flex justify-center space-x-2 mb-6">{renderTypes(pokemon.types)}</div>
        <p className="text-gray-600 max-w-2xl mx-auto px-6 mb-6">{pokemonFull?.description}</p>
      </div>

      {/* 能力值 */}
      <div className="px-8 py-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">能力值</h2>
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

      {/* 可学习招式 */}
      <div className="px-8 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">可学习招式</h2>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">等级提升</h3>
        <Table
          columns={columnsLevelUp}
          dataSource={movesLevelUp}
          pagination={false}
        />
        <h3 className="text-xl font-semibold text-gray-800 my-4">招式学习器</h3>
        <Table
          columns={columnsTM}
          dataSource={movesTM}
          pagination={false}
        />
      </div>
    </div>
  );
};

const PokemonDetailPageWrapper: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const pokemon = PokemonDataByName[name || ""];

  return pokemon ? (
    <PokemonDetailPage
      key={name}
      data={pokemon}
    />
  ) : (
    <NotFoundPage />
  );
};

export default PokemonDetailPageWrapper;
