import { Table, TableColumnsType } from "antd";
import React, { Fragment, useEffect } from "react";

import { LumioseMap, PokemonIconWithName } from "@/components";
import { PokemonDataById } from "@/data";
import { AREA_NAMES } from "@/data/areas";
import { Pokemon, PokemonForm } from "@/types";
import { DEFAULT_TITLE, Link, useImport, useLoadingAnchor } from "@/utils";

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

  const [data, loading] = useImport(async () => {
    const pokemonData = (await import("@/data/areas/pokemon.json")).default as Record<string, PokemonForm[]>;
    return AREA_NAMES.map(
      (name) =>
        ({
          name,
          pokemon: pokemonData[name]?.map((form) => PokemonDataById[form as PokemonForm]) || [],
        }) as IAreaOverview,
    );
  });

  useLoadingAnchor([loading]);

  return (
    <Fragment key="wild-zone-list">
      <div className="section">
        <h1>密阿雷地图</h1>
      </div>

      <div className="section">
        <h2>地图</h2>
        <LumioseMap filter={{ layers: new Set(["pc", "zone", "cafe", "building"]) }} />
      </div>

      <div className="section">
        <h2>宝可梦列表</h2>
        <Table<IAreaOverview>
          dataSource={data || []}
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
