import { Popover, Table, TableColumnsType } from "antd";

import { ItemDataByName, MoveDataByName, PokemonDataByName } from "@/data";
import { Nature, TrainerPokemon } from "@/types";
import { Link, TableCommonProps, TypeIcons } from "@/utils";

import { ItemIcon } from "../item/ItemIcon";
import { MoveLink } from "../move/MoveLink";
import { NatureCell } from "../nature/NatureCell";
import { PokemonCell } from "../pokemon/PokemonCell";
import { TypeEffects } from "../type/TypeEffects";

const pokemonColumns: TableColumnsType<TrainerPokemon> = [
  {
    title: "宝可梦",
    dataIndex: "name",
    width: 120,
    render: (name: string, record: TrainerPokemon) => (
      <PokemonCell
        pokemon={PokemonDataByName[name]}
        shiny={Boolean(record.shiny)}
      />
    ),
  },
  {
    title: "属性",
    key: "types",
    width: 80,
    render: (_, row) => (
      <Popover
        title="属性相克"
        content={<TypeEffects types={PokemonDataByName[row.name].types} />}
      >
        <>
          <TypeIcons types={PokemonDataByName[row.name].types} />
        </>
      </Popover>
    ),
  },
  {
    title: "等级",
    dataIndex: "level",
    width: 40,
  },
  {
    title: "道具",
    dataIndex: "item",
    width: 20,
    render: (item: string) =>
      item ? (
        <ItemIcon
          className="icon-inline"
          item={ItemDataByName[item]}
        />
      ) : (
        "—"
      ),
  },
  {
    title: "招式",
    dataIndex: "moves",
    width: 160,
    render: (moves: TrainerPokemon["moves"]) => (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 min-w-16">
        {moves.split("|").map((move) =>
          move.endsWith("+") ? (
            <MoveLink
              key={move}
              move={MoveDataByName[move.slice(0, -1)]}
              plus
            />
          ) : (
            <MoveLink
              key={move}
              move={MoveDataByName[move]}
            />
          ),
        )}
      </div>
    ),
  },
  {
    title: "性格",
    dataIndex: "nature",
    width: 80,
    render: (nature: Nature | undefined) => <NatureCell nature={nature || "勤奋"} />,
  },
  {
    title: "其他",
    key: "other",
    width: 160,
    render: (_, row) => {
      const result = [
        row.shiny ? "异色" : "",
        row.alpha ? "头目" : "",
        row.item ? (
          <>
            道具：<Link to={`/i/${row.item}`}>{row.item}</Link>
          </>
        ) : (
          ""
        ),
        row.ivs
          ? `个体值：${Array.from({ length: 6 })
              .map((_, i) => parseInt(row.ivs![i], 36))
              .join(" / ")}`
          : "",
        row.evs ? `基础点数：${row.evs.map((ev) => ev.toString()).join(" / ")}` : "",
      ]
        .filter(Boolean)
        .map((item) => <div key={item.toString()}>{item}</div>);
      return result.length ? <div className="min-w-48">{result}</div> : "—";
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
