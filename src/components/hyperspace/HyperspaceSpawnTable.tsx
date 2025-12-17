import { Table, TableColumnsType } from "antd";
import { FC } from "react";

import { PokemonDataById } from "@/data";
import { IHyperspaceSpawn, PokemonForm, PokemonSpawnDetail } from "@/types";
import { TableCommonProps } from "@/utils";

import { PokemonSpawnTable } from "../location/PokemonSpawnTable";
import { PokemonIconWithName } from "../pokemon";

const pokemonListRender = (pokemonList: PokemonForm[]) => (
  <div className="flex text-center gap-4 flex-wrap">
    {pokemonList.map((pokemon, index) => (
      <PokemonIconWithName
        key={index}
        pokemon={PokemonDataById[pokemon]}
        link
      />
    ))}
  </div>
);

const columns: TableColumnsType<IHyperspaceSpawn> = [
  {
    title: "编号",
    dataIndex: "areaIndex",
    render: (v) => `#${v}`,
    width: 80,
  },
  {
    title: "主要宝可梦",
    dataIndex: "focus",
    render: pokemonListRender,
    width: 352,
  },
  {
    title: "其他宝可梦",
    key: "all",
    render: (row: IHyperspaceSpawn) => {
      const pokemonSet = [...new Set(row.pokemonRaw.split("|").map((p) => p.split("+")[0] as PokemonForm))].filter(
        (p) => !row.focus.includes(p),
      );
      return pokemonSet.length ? pokemonListRender(pokemonSet) : "—";
    },
    minWidth: 352,
  },
];

interface IProps {
  expand?: boolean;
  data?: IHyperspaceSpawn[];
}

export const HyperspaceSpawnTable: FC<IProps> = ({ data, expand }) => (
  <Table<IHyperspaceSpawn>
    {...TableCommonProps}
    expandable={{
      defaultExpandAllRows: expand,
      expandedRowRender: (row) => (
        <PokemonSpawnTable
          headers={["宝可梦", "图鉴", "属性", "通常等级", "头目概率", "头目等级", "稀有度"]}
          data={row.pokemonRaw.split("|").map((p, index) => {
            const [form, levelMinStr, levelMaxStr, alphaRateStr, alphaLevelMinStr, alphaLevelMaxStr, rarityStr] =
              p.split("+");

            const item: PokemonSpawnDetail = {
              index,
              form: form as PokemonForm,
              pokemon: PokemonDataById[form as PokemonForm],
              levelMin: parseInt(levelMinStr, 10),
              levelMax: parseInt(levelMaxStr, 10),
              alphaRate: parseInt(alphaRateStr || "0", 10),
              alphaLevelMin: parseInt(alphaLevelMinStr || "0", 10),
              alphaLevelMax: parseInt(alphaLevelMaxStr || "0", 10),
              rarity: parseFloat(rarityStr || "0"),
            };
            return item;
          })}
        />
      ),
    }}
    rowKey={(row) => row.index}
    columns={columns}
    dataSource={data}
    pagination={false}
  />
);
