import { Table, TableColumnsType } from "antd";

import PokemonIcon from "../pokemon/PokemonIcon";

import { PokemonDataByName } from "@/data";
import { TrainerBase, TrainerPokemon } from "@/types";
import { PaginationConfig, TableCommonProps, getPokemonFullNameFriendly } from "@/utils";

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

const columns: TableColumnsType<TrainerBase> = [
  {
    title: "训练家类型",
    dataIndex: "trtype",
  },
  {
    title: "名字",
    dataIndex: "trname",
    render: (_, row) => `${row.trname}${row.trname_2 ? ` / ${row.trname_2}` : ""}`,
  },
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

interface ITrainerTableProps {
  loading?: boolean;
  data?: TrainerBase[];
}

const TrainerTable = ({ loading = false, data }: ITrainerTableProps) => {
  return (
    <Table<TrainerBase>
      {...(TableCommonProps as any)}
      rowKey={(_, index) => index}
      loading={loading}
      columns={columns}
      dataSource={data}
      pagination={PaginationConfig}
    />
  );
};

export default TrainerTable;
