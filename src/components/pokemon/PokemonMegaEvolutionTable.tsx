import { Table, TableColumnsType } from "antd";
import { FC, ReactNode } from "react";

import { Item, Pokemon, PokemonType } from "@/types";
import { PokemonTypeFilters, TableCommonProps, TypeIcons, getPokemonFullId } from "@/utils";

import { PokemonCell } from "./PokemonCell";

export interface MegaEvolutionFull {
  normal: Pokemon;
  mega: Pokemon;
  stone: Item;
}

const renderStatDiff = (megaStat: number, normalStat: number): ReactNode => {
  const diff = megaStat - normalStat;
  return diff === 0 ? (
    megaStat
  ) : (
    <div>
      <div>{megaStat}</div>
      <div className={diff > 0 ? "text-green-500" : "text-red-500"}>
        ({diff > 0 ? "+" : ""}
        {diff})
      </div>
    </div>
  );
};

const columns: TableColumnsType<MegaEvolutionFull> = [
  {
    title: "图鉴",
    key: "pokedex",
    children: [
      {
        title: "密阿雷",
        key: "dex",
        defaultSortOrder: "ascend",
        sorter: (a, b) => (a.normal.dex || Infinity) - (b.normal.dex || Infinity),
        render: (row) => (row.normal.dex !== 0 ? row.normal.dex.toString().padStart(3, "0") : "-"),
      },
      {
        title: "全国",
        key: "national",
        sorter: (a, b) => a.normal.national - b.normal.national,
        render: (row) => row.normal.national.toString().padStart(3, "0"),
      },
    ],
  },
  {
    title: "超级进化前",
    key: "normal",
    children: [
      {
        title: "宝可梦",
        key: "normalPokemon",
        render: (row) => <PokemonCell pokemon={row.normal} />,
      },
      {
        title: "属性",
        key: "normalTypes",
        render: (row) => <TypeIcons types={row.normal.types} />,
        filters: PokemonTypeFilters,
        onFilter: (value, record) => record.normal.types.includes(value as PokemonType),
      },
      {
        title: "种族值",
        key: "normalBase",
        children: [
          ...["HP", "攻击", "防御", "特攻", "特防", "速度"].map((stat, index) => ({
            title: stat,
            key: `normalBase[${index}]`,
            render: (row: MegaEvolutionFull) => row.normal.base[index],
            sorter: (a: MegaEvolutionFull, b: MegaEvolutionFull) => a.normal.base[index] - b.normal.base[index],
          })),
          {
            title: "总和",
            key: "normalBaseTotal",
            render: (row) => row.normal.baseTotal,
            sorter: (a, b) => a.normal.baseTotal - b.normal.baseTotal,
          },
        ],
      },
    ],
  },
  {
    title: "超级进化后",
    key: "mega",
    children: [
      {
        title: "宝可梦",
        key: "megaPokemon",
        render: (row) => <PokemonCell pokemon={row.mega} />,
      },
      {
        title: "属性",
        key: "megaTypes",
        render: (row) => <TypeIcons types={row.mega.types} />,
        filters: PokemonTypeFilters,
        onFilter: (value, record) => record.mega.types.includes(value as PokemonType),
      },
      {
        title: "种族值",
        key: "megaBase",
        children: [
          ...["HP", "攻击", "防御", "特攻", "特防", "速度"].map((stat, index) => ({
            title: stat,
            key: `megaBase[${index}]`,
            render: (row: MegaEvolutionFull) => renderStatDiff(row.mega.base[index], row.normal.base[index]),
            sorter: (a: MegaEvolutionFull, b: MegaEvolutionFull) => a.mega.base[index] - b.mega.base[index],
          })),
          {
            title: "总和",
            key: "megaBaseTotal",
            render: (row) => renderStatDiff(row.mega.baseTotal, row.normal.baseTotal),
            sorter: (a, b) => a.mega.baseTotal - b.mega.baseTotal,
          },
        ],
      },
    ],
  },
];

interface IProps {
  loading?: boolean;
  data?: MegaEvolutionFull[];
}

export const PokemonMegaEvolutionTable: FC<IProps> = ({ loading = false, data }) => (
  <Table<MegaEvolutionFull>
    {...TableCommonProps}
    rowKey={(row) => getPokemonFullId(row.mega)}
    loading={loading}
    columns={columns}
    dataSource={data}
    pagination={false}
  />
);
