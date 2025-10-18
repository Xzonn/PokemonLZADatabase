import { useMemo } from "react";
import { Pokemon, PokemonType } from "../types";
import { Table, TableColumnsType, TablePaginationConfig } from "antd";
import { Link } from "react-router-dom";
import { getPokemonFullName, PokemonTypeFilters, renderTypes } from "../utils";
import PokemonIcon from "./PokemonIcon";

const columns: TableColumnsType<Pokemon> = [
  {
    title: "宝可梦",
    dataIndex: "name",
    render: (name, row) => (
      <Link
        to={`/p/${getPokemonFullName(row)}`}
        className="cell-pokemon text-blue-600 hover:underline"
      >
        <PokemonIcon pokemon={row} />
        <div>
          <div className="pokemon-name">{name}</div>
          <div className="pokemon-form">{row.formName}</div>
        </div>
      </Link>
    ),
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
    children: ["HP", "攻击", "防御", "特攻", "特防", "速度"].map((stat, index) => ({
      title: stat,
      dataIndex: `base[${index}]`,
      render: (_: any, record: Pokemon) => record.base[index],
      sorter: (a: Pokemon, b: Pokemon) => a.base[index] - b.base[index],
    })),
  },
];

const paginationConfig: TablePaginationConfig = {
  pageSize: 100,
  showSizeChanger: true,
  pageSizeOptions: ["100", "200", "500", "1000"],
};

interface IPokemonTableProps<T = undefined> {
  data?: (Pokemon & T)[];
  extraColumns?: TableColumnsType<Pokemon & T>;
  showStats?: boolean;
}

const PokemonTable = <T,>({ data, showStats, extraColumns }: IPokemonTableProps<T>) => {
  const fullColumns = useMemo(
    () => [...((showStats ? columnsWithStats : columns) as TableColumnsType<Pokemon & T>), ...(extraColumns || [])],
    [extraColumns, showStats],
  );

  return (
    <Table
      scroll={{
        scrollToFirstRowOnChange: true,
        x: true,
      }}
      sticky={{ offsetHeader: 0 }}
      columns={fullColumns}
      dataSource={data}
      pagination={paginationConfig}
    />
  );
};

export default PokemonTable;
