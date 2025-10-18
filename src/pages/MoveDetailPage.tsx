// src/pages/MoveDetailPage.tsx

import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { getTypeColor } from "../utils";
import NotFoundPage from "./NotFoundPage";
import { MoveData } from "../data/move";
import { PokemonDataById } from "../data/pokemon";
import { Move, MoveFull, Pokemon, PokemonLevelUp } from "../types";
import { useRequest } from "ahooks";
import PokemonTable from "../components/PokemonTable";
import { TableColumnsType } from "antd";

const columnsLevelUp: TableColumnsType<Pokemon & PokemonLevelUp> = [
  {
    title: "等级",
    dataIndex: "level",
    sorter: (a, b) => a.level - b.level,
  },
];

const MoveDetailPage: React.FC<{ data: Move }> = ({ data: move }) => {
  const { data: moveFull = null } = useRequest(
    async () => {
      const realData = await import(`../data/m/${move.id.toString().padStart(3, "0")}.json`).then((mod) => mod.default);
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
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* 基本信息 */}
      <div className="pt-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{move.name}</h1>
        <p className="text-xl text-gray-600 mb-4">{move.english}</p>
        <div className="flex justify-center space-x-4 mb-6">
          <span className={`px-4 py-2 rounded-full text-base font-semibold ${getTypeColor(move.type)}`}>
            {move.type}
          </span>
          <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-base font-semibold">
            {move.category}
          </span>
        </div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto px-6">{move.description}</p>
      </div>

      {/* 招式数据 */}
      <div className="px-8 py-8 bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">招式数据</h2>
        <div className="max-w-2xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
              <i className="fa fa-bolt text-blue-600 text-2xl"></i>
            </div>
            <h3 className="text-gray-500 text-sm mb-1">威力</h3>
            <p className="text-2xl font-bold text-gray-900">{move.power || "-"}</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
              <i className="fa fa-crosshairs text-green-600 text-2xl"></i>
            </div>
            <h3 className="text-gray-500 text-sm mb-1">等待时间</h3>
            <p className="text-2xl font-bold text-gray-900">{move.wait || "--"}</p>
          </div>
        </div>
      </div>

      {/* 可学习宝可梦 */}
      <div className="px-8 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">可学习宝可梦</h2>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">等级提升</h3>
        <PokemonTable<PokemonLevelUp>
          data={pokemonLevelUp}
          extraColumns={columnsLevelUp}
        />
        <h3 className="text-xl font-semibold text-gray-800 mb-4">招式学习器</h3>
        <PokemonTable data={pokemonTM} />
      </div>
    </div>
  );
};

const MoveDetailPageWrapper: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const move = MoveData.find((m) => m.name === name);

  if (!move) {
    return <NotFoundPage />;
  }

  return move ? (
    <MoveDetailPage
      key={name}
      data={move}
    />
  ) : (
    <NotFoundPage />
  );
};

export default MoveDetailPageWrapper;
