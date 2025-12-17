import { Table, TableColumnsType, TablePaginationConfig } from "antd";
import { useMemo } from "react";

import { PokemonSpawn, PokemonType } from "@/types";
import { PokemonTypeFilters, TableCommonProps, TypeIcons } from "@/utils";

import { PokemonCell } from "../pokemon";

const columns: TableColumnsType<PokemonSpawn> = [
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
        sorter: (a, b) => (a.pokemon.dex || Infinity) - (b.pokemon.dex || Infinity),
        render: (row) =>
          row.pokemon.dex > 0 && row.pokemon.dex <= 232 ? row.pokemon.dex.toString().padStart(3, "0") : "—",
      },
      {
        title: "异次元",
        key: "dexHyperspace",
        sorter: (a, b) => (a.pokemon.dexHyperspace || Infinity) - (b.pokemon.dexHyperspace || Infinity),
        render: (row) => (row.pokemon.dexHyperspace > 0 ? row.pokemon.dexHyperspace.toString().padStart(3, "0") : "—"),
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
    onCell: () => ({ className: "text-nowrap" }),
  },
  {
    title: "头目概率",
    dataIndex: "alphaRate",
    render: (v) => (v !== 0 ? `${v}%` : "—"),
  },
  {
    title: "头目等级",
    key: "alphaLevel",
    render: (row) => (row.alphaRate !== 0 ? `${row.alphaLevelMin} - ${row.alphaLevelMax}` : "—"),
    onCell: () => ({ className: "text-nowrap" }),
  },
  {
    title: "稀有度",
    dataIndex: "rarity",
    render: (v) => (v !== 0 ? `${v}%` : "—"),
  },
  {
    title: "时间",
    dataIndex: "time",
    render: (v) => v || "—",
  },
  {
    title: "天气",
    dataIndex: "weather",
    render: (v) => v || "—",
  },
];

interface ITableProps {
  loading?: boolean;
  data?: PokemonSpawn[];
  headers?: string[];
  pagination?: false | TablePaginationConfig;
}

export const PokemonSpawnTable = ({
  loading = false,
  data,
  headers = ["宝可梦", "图鉴", "属性", "通常等级", "头目概率", "头目等级"],
  pagination,
}: ITableProps) => {
  const sortedColumns = useMemo(() => {
    type ColumnType = TableColumnsType<PokemonSpawn>[number];
    const columnsByTitle = new Map<string, ColumnType>(columns.map((col) => [col.title, col] as [string, ColumnType]));
    return headers?.map((header) => columnsByTitle.get(header)).filter(Boolean) as TableColumnsType<PokemonSpawn>;
  }, [headers]);

  return (
    <Table<PokemonSpawn>
      {...TableCommonProps}
      rowKey={(row) => row.index}
      loading={loading}
      columns={sortedColumns}
      dataSource={data}
      pagination={pagination ?? false}
    />
  );
};
