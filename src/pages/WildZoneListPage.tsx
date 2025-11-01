import { useRequest } from "ahooks";
import { Table, TableColumnsType } from "antd";
import React, { Fragment, useEffect, useState } from "react";

import { PokemonIconWithName, PokemonMap, ZoneLink } from "@/components";
import { PokemonDataById } from "@/data";
import { Pokemon, PokemonForm } from "@/types";
import { DEFAULT_TITLE, onUseRequestError } from "@/utils";

interface IWildZoneOverview {
  index: number;
  pokemon: Pokemon[];
}

const columns: TableColumnsType<IWildZoneOverview> = [
  {
    title: "编号",
    dataIndex: "index",
    render: (v) => <ZoneLink id={v} />,
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

const WildZoneListPage: React.FC = () => {
  useEffect(() => {
    document.title = `野生特区一览 - ${DEFAULT_TITLE}`;
  }, []);

  const { data: pokemonData = null, loading } = useRequest(
    async () =>
      Object.entries((await import("@/data/zone/pokemon.json")).default).map(
        ([index, forms]) =>
          ({
            index: parseInt(index, 10),
            pokemon: forms.map((form) => PokemonDataById[form as PokemonForm]),
          }) as IWildZoneOverview,
      ),
    {
      refreshDeps: [],
      onError: onUseRequestError,
    },
  );

  const [active, setActive] = useState<number | null>(null);

  return (
    <Fragment key="wild-zone-list">
      <div className="block">
        <h1>野生特区一览</h1>
      </div>

      <div className="block">
        <h2>地图</h2>
        <PokemonMap
          active={active}
          setActive={setActive}
        />
      </div>

      <div className="block">
        <h2>宝可梦列表</h2>
        <Table<IWildZoneOverview>
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

export default WildZoneListPage;
