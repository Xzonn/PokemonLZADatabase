"use client";

import { useLocalStorageState } from "ahooks";
import { Button, Spin } from "antd";
import { FC, Fragment, useEffect, useMemo } from "react";
import { useParams } from "@/utils/ParamsProvider";

import { HyperspaceSpawnTable, HyperspaceWildZoneNavigation, PokemonFilterIcon } from "@/components";
import { PokemonDataById } from "@/data";
import { EPokemonType, PokemonForm, PokemonType } from "@/types";
import { DEFAULT_TITLE, useImport, useLoadingAnchor } from "@/utils";

import NotFoundPage from "./NotFoundPage";

interface IFilter {
  pokemonForm?: PokemonForm;
}

interface IProps {
  name: PokemonType | "传说";
}

const HyperspaceWildZoneDetailPageCore: FC<IProps> = ({ name: typeName }) => {
  useEffect(() => {
    document.title = `野生异次元：${typeName === "传说" ? "传说的宝可梦" : `${typeName}属性`} - ${DEFAULT_TITLE}`;
  }, [typeName]);

  const [data, loading] = useImport(() => import("@/data/hyperspace/spawn"));
  const { HyperspaceSpawns } = data || {};

  const [filter, setFilter] = useLocalStorageState<IFilter>("za-hyperspace-spawn-filter", {
    defaultValue: {},
  });

  const { spawnData = [], allPokemon = [] } = useMemo(() => {
    const spawnData = HyperspaceSpawns?.filter((item) => item.type === typeName) || [];

    const allPokemon = [
      ...new Set(spawnData.flatMap((item) => item.pokemonRaw.split("|").map((p) => p.split("+")[0] as PokemonForm))),
    ].sort();

    return { spawnData, allPokemon };
  }, [HyperspaceSpawns, typeName]);

  const filteredData = filter.pokemonForm
    ? spawnData.filter((item) => item.pokemonRaw.includes(filter.pokemonForm!))
    : spawnData;
  const groupedData = Object.groupBy(filteredData, (item) => item.star);

  const pokemonIcons = useMemo(() => {
    if (!allPokemon.length) {
      return null;
    }
    if (!allPokemon.includes(filter.pokemonForm!)) {
      setFilter({ pokemonForm: undefined });
    }
    return allPokemon.map((p) => (
      <PokemonFilterIcon
        key={p}
        pokemon={PokemonDataById[p]}
        className={filter.pokemonForm === p ? "bg-blue-100 rounded-md" : ""}
        onClick={() => {
          setFilter({ pokemonForm: p });
        }}
      />
    ));
  }, [allPokemon, filter.pokemonForm, setFilter]);

  useLoadingAnchor([loading]);

  return (
    <Fragment key="hyperspace-wild-zone-detail">
      <div className="section">
        <h1 className="flex justify-center">野生异次元：{typeName === "传说" ? "传说的宝可梦" : `${typeName}属性`}</h1>
        <p className="description">所有宝可梦等级均为基础等级，实际等级会受到异次元空间的影响而提高。</p>
      </div>

      <div className="section">
        <HyperspaceWildZoneNavigation />
      </div>

      <div className="section">
        <h2>筛选条件</h2>
        <div className="flex justify-center mb-2">
          <Button
            onClick={() => setFilter({ pokemonForm: undefined })}
            disabled={filter.pokemonForm === undefined}
          >
            取消筛选宝可梦
          </Button>
        </div>
        <Spin spinning={loading}>
          <div className="grid text-md grid-cols-[repeat(auto-fit,_72px)]">{pokemonIcons}</div>
        </Spin>
      </div>

      {loading
        ? null
        : Object.entries(groupedData).map(([star, items]) => (
            <div
              className="section"
              key={star}
            >
              <h2>{star} 星级</h2>
              <HyperspaceSpawnTable
                key={filter?.pokemonForm}
                data={items}
                expand={Boolean(filter?.pokemonForm)}
              />
            </div>
          ))}
    </Fragment>
  );
};

const HyperspaceWildZoneDetailPage: FC = () => {
  const { name } = useParams<{ name: string }>();

  return name === "传说" || EPokemonType.includes((name || "") as PokemonType) ? (
    <HyperspaceWildZoneDetailPageCore name={name as PokemonType} />
  ) : (
    <NotFoundPage />
  );
};

export default HyperspaceWildZoneDetailPage;
