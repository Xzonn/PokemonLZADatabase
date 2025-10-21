import { Table, TableColumnsType } from "antd";

import { MoveLink } from "../move/MoveLink";
import PokemonCell from "../pokemon/PokemonCell";

import { MoveDataByName, PokemonDataByName } from "@/data";
import { TrainerPokemon, TrainerPokemonMove } from "@/types";
import { TableCommonProps, renderTypes } from "@/utils";

const pokemonColumns: TableColumnsType<TrainerPokemon> = [
  {
    title: "宝可梦",
    dataIndex: "name",
    width: 120,
    render: (name: string) => <PokemonCell pokemon={PokemonDataByName[name]} />,
  },
  {
    title: "属性",
    key: "types",
    width: 80,
    render: (_, row) => renderTypes(PokemonDataByName[row.name].types),
  },
  {
    title: "等级",
    dataIndex: "level",
    width: 40,
  },
  {
    title: "招式",
    dataIndex: "moves",
    width: 160,
    render: (moves: TrainerPokemonMove[]) => (
      <div className="flex flex-wrap gap-y-2">
        {moves.map((move) => (
          <MoveLink
            key={move.name}
            move={MoveDataByName[move.name]}
            plus={move.plus}
          />
        ))}
      </div>
    ),
  },
  {
    title: "精灵球",
    dataIndex: "ball",
    width: 80,
  },
  {
    title: "性格",
    dataIndex: "nature",
    width: 80,
  },
  {
    title: "其他",
    key: "other",
    width: 160,
    render: (_, row) => {
      const result = [
        row.shiny ? "异色" : "",
        row.item ? `道具：${row.item}` : "",
        row.ivs ? `个体值：${row.ivs.map((iv) => iv.toString()).join(" / ")}` : "",
        row.evs ? `基础点数：${row.evs.map((ev) => ev.toString()).join(" / ")}` : "",
      ]
        .filter(Boolean)
        .map((item) => <div key={item}>{item}</div>);
      return result.length ? result : "—";
    },
  },
];

export const TrainerPokemonTable: React.FC<{ pokemon: TrainerPokemon[] }> = ({ pokemon }) => (
  <Table<TrainerPokemon>
    {...TableCommonProps}
    sticky={false}
    rowKey={(row, index) => `${row.name}-${index}`}
    columns={pokemonColumns}
    dataSource={pokemon}
    pagination={false}
  />
);
