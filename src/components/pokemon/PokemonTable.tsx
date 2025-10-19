import { useMemo } from "react";
import { Pokemon, PokemonType } from "../../types";
import { Table, TableColumnsType } from "antd";
import { PaginationConfig, PokemonTypeFilters, renderTypes, TableCommonProps } from "../../utils";
import PokemonCell from "./PokemonCell";

const columns: TableColumnsType<Pokemon> = [
  {
    title: "宝可梦",
    dataIndex: "name",
    render: (_, row) => <PokemonCell pokemon={row} />,
  },
  {
    title: "图鉴",
    key: "pokedex",
    children: [
      {
        title: "密阿雷",
        dataIndex: "dex",
        defaultSortOrder: "ascend",
        sorter: (a, b) => (a.dex || Infinity) - (b.dex || Infinity),
        render: (dex) => (dex !== 0 ? dex.toString().padStart(3, "0") : "-"),
      },
      {
        title: "全国",
        dataIndex: "national",
        sorter: (a, b) => a.national - b.national,
        render: (national) => national.toString().padStart(3, "0"),
      },
    ],
  },
  {
    title: "属性",
    dataIndex: "types",
    render: (types) => renderTypes(types),
    filters: PokemonTypeFilters,
    onFilter: (value, record) => record.types.includes(value as PokemonType),
  },
];

const columnsWithStats: TableColumnsType<Pokemon> = [
  ...columns,
  {
    title: "种族值",
    key: "base",
    children: [
      ...["HP", "攻击", "防御", "特攻", "特防", "速度"].map((stat, index) => ({
        title: stat,
        dataIndex: `base[${index}]`,
        render: (_: any, record: Pokemon) => record.base[index],
        sorter: (a: Pokemon, b: Pokemon) => a.base[index] - b.base[index],
      })),
      {
        title: "总和",
        key: "baseTotal",
        sorter: (a: Pokemon, b: Pokemon) => a.baseTotal - b.baseTotal,
      },
    ],
  },
];

interface IPokemonTableProps<T = undefined> {
  loading?: boolean;
  data?: (Pokemon & T)[];
  extraColumns?: TableColumnsType<Pokemon & T>;
  showStats?: boolean;
}

const PokemonTable = <T,>({ loading = false, data, showStats, extraColumns }: IPokemonTableProps<T>) => {
  const fullColumns = useMemo(
    () => [...((showStats ? columnsWithStats : columns) as TableColumnsType<Pokemon & T>), ...(extraColumns || [])],
    [extraColumns, showStats],
  );

  return (
    <Table
      {...(TableCommonProps as any)}
      loading={loading}
      columns={fullColumns}
      dataSource={data}
      pagination={(data?.length || 0) > 100 ? PaginationConfig : false}
    />
  );
};

export default PokemonTable;
