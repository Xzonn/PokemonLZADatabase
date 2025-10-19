import { ReactNode } from "react";
import { Pokemon, PokemonType, PokemonForm, EPokemonType, EMoveCategory, MoveCategory } from "../types";
import { ColumnFilterItem } from "antd/es/table/interface";
import { DescriptionsProps, TableProps } from "antd";

export const DefaultTitle = "宝可梦传说 Z-A 数据库";

export const renderType = (type: PokemonType) => <span className={`badge-type bg-${type}`}>{type}</span>;

export const renderCategory = (category: MoveCategory) => (
  <span className={`badge-category bg-${category}`}>{category}</span>
);

export const renderTypes = (types: [PokemonType, PokemonType]) => (
  <span className="badges">{(types[0] === types[1] ? [types[0]] : types).map((type) => renderType(type))}</span>
);

export const getPokemonFullName = (pokemon: Pokemon): string => {
  return pokemon.form > 0 ? `${pokemon.name}-${pokemon.form}` : pokemon.name;
};

export const getPokemonFullId = (pokemon: Pokemon): PokemonForm => {
  return `${pokemon.id.toString().padStart(3, "0") as unknown as number}-${pokemon.form}`;
};

export const PokemonTypeFilters: ColumnFilterItem[] = EPokemonType.map((type) => ({
  text: type,
  value: type,
}));

export const MoveCategoryFilters: ColumnFilterItem[] = EMoveCategory.map((category: any) => ({
  text: category,
  value: category,
}));

export const TableCommonProps: Partial<TableProps> = {
  scroll: {
    scrollToFirstRowOnChange: true,
    x: true,
  },
  sticky: { offsetHeader: 0 },
  size: "small",
  tableLayout: "fixed",
};

export const DescriptionsCommonProps: Partial<DescriptionsProps> = {
  size: "small",
  bordered: true,
  column: { xs: 1, sm: 1, md: 3, lg: 3, xl: 3, xxl: 3 },
};
