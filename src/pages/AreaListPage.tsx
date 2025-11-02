import { useRequest } from "ahooks";
import { Table, TableColumnsType } from "antd";
import React, { Fragment, useEffect } from "react";

import { PokemonIconWithName, PokemonMap } from "@/components";
import { PokemonDataById } from "@/data";
import { AreaNames } from "@/data/areas";
import { Pokemon, PokemonForm } from "@/types";
import { DEFAULT_TITLE, Link, onUseRequestError } from "@/utils";

interface IAreaOverview {
  name: string;
  pokemon: Pokemon[];
}

const columns: TableColumnsType<IAreaOverview> = [
  {
    title: "地点",
    dataIndex: "name",
    render: (v) => <Link to={`/area/${v}`}>{v}</Link>,
  },
  {
    title: "宝可梦",
    dataIndex: "pokemon",
    render: (pokemonList: Pokemon[]) => (
      <div className="flex text-center gap-4 flex-wrap">
        {pokemonList.map((pokemon, index) => (
          <PokemonIconWithName
            key={index}
            pokemon={pokemon}
            link
          />
        ))}
      </div>
    ),
  },
];

const AreaListPage: React.FC = () => {
  useEffect(() => {
    document.title = `密阿雷地图 - ${DEFAULT_TITLE}`;
  }, []);

  const { data: pokemonData = null, loading } = useRequest(
    async () => {
      const pokemonData = (await import("@/data/areas/pokemon.json")).default as Record<string, PokemonForm[]>;
      return AreaNames.map(
        (name) =>
          ({
            name,
            pokemon: pokemonData[name]?.map((form) => PokemonDataById[form as PokemonForm]) || [],
          }) as IAreaOverview,
      );
    },
    {
      refreshDeps: [],
      onError: onUseRequestError,
    },
  );

  return (
    <Fragment key="wild-zone-list">
      <div className="section">
        <h1>密阿雷地图</h1>
      </div>

      <div className="section">
        <h2>地图</h2>
        <PokemonMap />
      </div>

      <div className="section">
        <h2>宝可梦列表</h2>
        <Table<IAreaOverview>
          dataSource={pokemonData || []}
          loading={loading}
          columns={columns}
          rowKey="index"
          pagination={false}
        />
      </div>
    </Fragment>
  );
};

export default AreaListPage;
