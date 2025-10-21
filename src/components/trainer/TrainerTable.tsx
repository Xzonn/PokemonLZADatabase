import { Popover, Table, TableColumnsType } from "antd";
import { useMemo } from "react";

import Link from "../Link";
import PokemonCell from "../pokemon/PokemonCell";
import PokemonIcon from "../pokemon/PokemonIcon";

import { MoveDataByName, PokemonDataByName } from "@/data";
import { Move, TrainerBase, TrainerNormal, TrainerPokemon, TrainerPokemonMove, TrainerRoyal } from "@/types";
import { PaginationConfig, TableCommonProps, renderCategory, renderType } from "@/utils";

const TrainerPokemonComponent: React.FC<{ pokemon: TrainerPokemon }> = ({ pokemon: p }) => {
  const pokemon = PokemonDataByName[p.name];

  return pokemon ? (
    <div className="flex flex-col items-center">
      <PokemonIcon
        pokemon={pokemon}
        link
      />
      <div>{pokemon.name}</div>
      <div>Lv. {p.level}</div>
    </div>
  ) : null;
};

const MoveLink: React.FC<{ move: Move; plus?: boolean }> = ({ move, plus = false }) => (
  <Popover
    title={`${move.name}${plus ? "（可强化）" : ""}`}
    content={
      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center gap-2">
          {renderType(move.type)}
          {renderCategory(move.category)}
        </div>
        <div>威力：{move.category === "变化" ? "—" : move.power || "—"}</div>
        <div>等待时间：{move.wait}</div>
        <div>{move.description}</div>
      </div>
    }
  >
    <Link to={`/m/${move.name}`}>
      {move.name}
      {plus ? <sup className="font-bold">+</sup> : ""}
    </Link>
  </Popover>
);

const TrainerPokemonTable: React.FC<{ pokemon: TrainerPokemon[] }> = ({ pokemon }) => (
  <Table<TrainerPokemon>
    rowKey={(row, index) => `${row.name}-${index}`}
    columns={pokemonColumns}
    dataSource={pokemon}
    pagination={false}
  />
);

const pokemonColumns: TableColumnsType<TrainerPokemon> = [
  {
    title: "宝可梦",
    dataIndex: "name",
    width: 150,
    render: (name: string) => <PokemonCell pokemon={PokemonDataByName[name]} />,
  },
  {
    title: "等级",
    dataIndex: "level",
    width: 80,
  },
  {
    title: "招式",
    dataIndex: "moves",
    width: 160,
    render: (moves: TrainerPokemonMove[]) => (
      <div className="flex flex-wrap gap-2">
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
    render: (_, row) =>
      [
        row.shiny ? "异色" : "",
        row.item ? `道具：${row.item}` : "",
        row.ivs ? `个体值：${row.ivs.map((iv) => iv.toString()).join(" / ")}` : "",
        row.evs ? `基础点数：${row.evs.map((ev) => ev.toString()).join(" / ")}` : "",
      ]
        .filter(Boolean)
        .map((item) => <div key={item}>{item}</div>),
  },
];

const getColumns = (
  data: TrainerBase[] | undefined,
  isRoyal: boolean,
): TableColumnsType<TrainerNormal | TrainerRoyal> => {
  const ranks = isRoyal ? Array.from(new Set(data?.map((item) => (item as TrainerRoyal).rank ?? "") || [])) : [];
  const trtypes = Array.from(new Set(data?.map((item) => item.trtype) || []));
  const trnames = Array.from(new Set(data?.map((item) => item.trname) || []));

  return [
    ...(isRoyal
      ? [
          {
            title: "等级",
            dataIndex: "rank",
            width: 80,
            filters: ranks.filter(Boolean).map((type) => ({
              text: type,
              value: type,
            })),
            onFilter: (value: any, record: any) => (record as TrainerRoyal).rank === value,
          },
        ]
      : []),
    {
      title: "训练家类型",
      dataIndex: "trtype",
      width: 200,
      filters: trtypes.map((type) => ({
        text: type,
        value: type,
      })),
      onFilter: (value, record) => record.trtype === value,
      filterSearch: true,
    },
    {
      title: "名字",
      dataIndex: "trname",
      width: 250,
      filters: trnames.map((name) => ({
        text: name,
        value: name,
      })),
      onFilter: (value, record) => record.trname === value,
      filterSearch: true,
    },
    ...(isRoyal
      ? []
      : [
          {
            title: "奖金",
            dataIndex: "prize",
            width: 100,
            render: (prize: number) => `$${prize}`,
          },
        ]),
    {
      title: "宝可梦",
      dataIndex: "pokemon",
      width: 500,
      render: (pokemon: TrainerPokemon[]) => (
        <div className="flex text-center gap-4 flex-wrap">
          {pokemon.map((p, i) => (
            <TrainerPokemonComponent
              key={i}
              pokemon={p}
            />
          ))}
        </div>
      ),
    },
  ];
};

interface ITrainerTableProps {
  isRoyal?: boolean;
  loading?: boolean;
  data?: TrainerBase[];
}

const TrainerTable: React.FC<ITrainerTableProps> = ({ isRoyal = false, loading = false, data }) => {
  const columns = useMemo(() => getColumns(data, isRoyal), [data, isRoyal]);
  return (
    <Table<TrainerBase>
      {...(TableCommonProps as any)}
      expandable={{
        expandedRowRender: (record) => <TrainerPokemonTable pokemon={record.pokemon} />,
      }}
      rowKey={(row, index) => `${row.trtype}-${row.trname}-${index}`}
      loading={loading}
      columns={columns}
      dataSource={data}
      pagination={PaginationConfig}
    />
  );
};

export default TrainerTable;
