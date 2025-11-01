import { Table, TableColumnsType, TablePaginationConfig } from "antd";
import { useMemo } from "react";

import { PokemonCell } from "../pokemon";

import { PokemonSpawnZone, PokemonType } from "@/types";
import { PokemonTypeFilters, TableCommonProps, TypeIcons } from "@/utils";

const columns: TableColumnsType<PokemonSpawnZone> = [
  {
    title: "宝可梦",
    dataIndex: "pokemon",
    render: (pokemon) => <PokemonCell pokemon={pokemon} />,
  },
  {
    title: "图鉴",
    key: "pokedex",
    children: [
      {
        title: "密阿雷",
        key: "dex",
        defaultSortOrder: "ascend",
        sorter: (a, b) => (a.pokemon.dex || Infinity) - (b.pokemon.dex || Infinity),
        render: (row) => (row.pokemon.dex !== 0 ? row.pokemon.dex.toString().padStart(3, "0") : "-"),
      },
      {
        title: "全国",
        key: "national",
        sorter: (a, b) => a.pokemon.national - b.pokemon.national,
        render: (row) => row.pokemon.national.toString().padStart(3, "0"),
      },
    ],
  },
  {
    title: "属性",
    key: "types",
    render: (row) => <TypeIcons types={row.pokemon.types} />,
    filters: PokemonTypeFilters,
    onFilter: (value, record) => record.pokemon.types.includes(value as PokemonType),
  },
  {
    title: "通常等级",
    key: "level",
    render: (row) => (row.alphaRate !== 100 ? `${row.levelMin} - ${row.levelMax}` : "—"),
  },
  {
    title: "头目概率",
    dataIndex: "alphaRate",
    render: (v) => `${v}%`,
  },
  {
    title: "头目等级",
    key: "alphaLevel",
    render: (row) => (row.alphaRate !== 0 ? `${row.alphaLevelMin} - ${row.alphaLevelMax}` : "—"),
  },
];

interface ITableProps<T = undefined> {
  loading?: boolean;
  data?: (PokemonSpawnZone & T)[];
  extraColumns?: TableColumnsType<PokemonSpawnZone & T>;
  headers?: string[];
  pagination?: false | TablePaginationConfig;
}

export const PokemonSpawnZoneTable = <T,>({
  loading = false,
  data,
  extraColumns = [],
  headers = ["宝可梦", "图鉴", "属性", "通常等级", "头目概率", "头目等级"],
  pagination,
}: ITableProps<T>) => {
  const sortedColumns = useMemo(() => {
    type ColumnType = TableColumnsType<PokemonSpawnZone & T>[number];
    const columnsByTitle = new Map<string, ColumnType>(
      [...columns, ...extraColumns].map((col) => [col.title, col] as [string, ColumnType]),
    );
    return headers?.map((header) => columnsByTitle.get(header)).filter(Boolean) as TableColumnsType<
      PokemonSpawnZone & T
    >;
  }, [headers, extraColumns]);

  return (
    <Table<PokemonSpawnZone & T>
      {...TableCommonProps}
      rowKey={(row) => row.index}
      loading={loading}
      columns={sortedColumns}
      dataSource={data}
      pagination={pagination ?? false}
    />
  );
};
