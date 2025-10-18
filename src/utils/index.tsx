// src/utils/index.ts

import { ReactNode } from "react";
import { Pokemon, PokemonType, PokemonForm } from "../types";
import { ColumnFilterItem } from "antd/es/table/interface";

// 获取类型颜色
export const getTypeColor = (type: string): string => {
  const typeColors: Record<string, string> = {
    草: "bg-grass text-white",
    火: "bg-fire text-white",
    水: "bg-water text-white",
    电: "bg-electric text-gray-800",
    超能力: "bg-psychic text-white",
    冰: "bg-ice text-gray-800",
    龙: "bg-dragon text-white",
    恶: "bg-dark text-white",
    妖精: "bg-fairy text-white",
    一般: "bg-gray-400 text-white",
    格斗: "bg-red-600 text-white",
    飞行: "bg-blue-300 text-gray-800",
    毒: "bg-purple-600 text-white",
    地面: "bg-yellow-600 text-white",
    岩石: "bg-yellow-700 text-white",
    虫: "bg-green-600 text-white",
    幽灵: "bg-purple-800 text-white",
    钢: "bg-gray-500 text-white",
  };

  return typeColors[type] || "bg-gray-500 text-white";
};

export const renderType = (type: PokemonType): ReactNode => {
  return <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getTypeColor(type)}`}>{type}</span>;
};

export const renderTypes = (types: [PokemonType, PokemonType]): ReactNode => {
  return types[0] === types[1] ? renderType(types[0]) : types.map((type) => renderType(type));
};

export const getPokemonFullName = (pokemon: Pokemon): string => {
  return pokemon.form > 0 ? `${pokemon.name}-${pokemon.form}` : pokemon.name;
};

export const getPokemonFullId = (pokemon: Pokemon): PokemonForm => {
  return `${pokemon.id.toString().padStart(3, "0") as unknown as number}-${pokemon.form}`;
};

export const PokemonTypeFilters: ColumnFilterItem[] = [
  "一般",
  "格斗",
  "飞行",
  "毒",
  "地面",
  "岩石",
  "虫",
  "幽灵",
  "钢",
  "火",
  "水",
  "草",
  "电",
  "超能力",
  "冰",
  "龙",
  "恶",
  "妖精",
].map((type) => ({
  text: type,
  value: type,
}));

export const MoveCategoryFilters: ColumnFilterItem[] = ["物理", "特殊", "变化"].map((category) => ({
  text: category,
  value: category,
}));
