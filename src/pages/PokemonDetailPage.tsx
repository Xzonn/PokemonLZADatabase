import { useRequest } from "ahooks";
import { Descriptions, DescriptionsProps, Spin, TableColumnsType } from "antd";
import React, { Fragment, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";

import { MoveTable, PokemonEvolutionTable, PokemonIcon, PokemonStatBar, PokemonTable, TypeEffects } from "@/components";
import { MoveDataById, PokemonData, PokemonDataByName } from "@/data";
import { Move, MoveLevelUp, MoveTM, Pokemon, PokemonForm, PokemonFull } from "@/types";
import {
  DEFAULT_TITLE,
  DescriptionsCommonProps1,
  DescriptionsCommonProps,
  Link,
  TypeIcons,
  getPokemonFullId,
  getPokemonFullNameFriendly,
  onUseRequestError,
  renderMoveLevel,
} from "@/utils";

import NotFoundPage from "./NotFoundPage";

enum ExpGrowth {
  "较快" = 0,
  "最快",
  "最慢",
  "较慢",
  "快",
  "慢",
}

const columnsLevelUp: TableColumnsType<MoveLevelUp & Move> = [
  {
    title: "等级",
    dataIndex: "level",
    render: renderMoveLevel,
    sorter: (a, b) => a.level - b.level,
  },
  {
    title: "加强等级",
    dataIndex: "levelPlus",
    sorter: (a, b) => a.levelPlus - b.levelPlus,
  },
];
const columnsTM: TableColumnsType<MoveTM & Move> = [
  {
    title: "编号",
    dataIndex: "index",
    sorter: (a, b) => a.index - b.index,
  },
];

const getDescriptions = (pokemon: Pokemon, pokemonFull: PokemonFull | null): DescriptionsProps["items"] => [
  {
    key: "national",
    label: "全国图鉴",
    children: pokemon.national.toString().padStart(3, "0"),
  },
  {
    key: "dex",
    label: "密阿雷图鉴",
    children: pokemon.dex !== 0 ? pokemon.dex.toString().padStart(3, "0") : "—",
  },
  {
    key: "types",
    label: "属性",
    children: <TypeIcons types={pokemon.types} />,
  },
  {
    key: "expGrowth",
    label: "成长速率",
    children: ExpGrowth[pokemonFull?.expGrowth ?? 0] || "—",
  },
  {
    key: "catchRate",
    label: "捕获率",
    children: pokemonFull?.catchRate || "—",
  },
  {
    key: "baseFriendship",
    label: "初始友好度",
    children: pokemonFull?.baseFriendship || "—",
  },
];

const getObtainDescriptions = (obtains: PokemonFull["obtains"], form: PokemonForm): DescriptionsProps["items"] => [
  {
    key: "map",
    label: "地图分布",
    children: (
      <Link
        to="/宝可梦分布"
        onClick={() => localStorage.setItem("za-spawn-filter", JSON.stringify({ pokemonForm: form }))}
      >
        查看地图分布
      </Link>
    ),
  },
  {
    key: "areas",
    label: "出现地点",
    children:
      obtains?.areas?.map((area, index) => (
        <>
          {index === 0 ? null : "、"}
          <Link
            id={area}
            to={`/area/${area}`}
          >
            {area}
          </Link>
        </>
      )) || "—",
  },
];

const PokemonDetailPageCore: React.FC<{ data: Pokemon }> = ({ data: pokemon }) => {
  useEffect(() => {
    document.title = `${getPokemonFullNameFriendly(pokemon)} - ${DEFAULT_TITLE}`;
  }, [pokemon]);

  const { data: pokemonFull = null, loading } = useRequest(
    async () => (await import(`@/data/p/${getPokemonFullId(pokemon)}.json`)).default as PokemonFull,
    {
      refreshDeps: [pokemon],
      onError: onUseRequestError,
    },
  );

  const allForms = useMemo(() => PokemonData.filter((p) => p.id === pokemon.id), [pokemon]);
  const movesLevelUp = useMemo(
    () =>
      pokemonFull?.movesLevelUp
        .map((move) => ({
          ...move,
          ...MoveDataById[move.move],
        }))
        .filter(Boolean),
    [pokemonFull],
  );
  const movesTM = useMemo(
    () =>
      pokemonFull?.movesTM
        .map((move) => ({
          ...move,
          ...MoveDataById[move.move],
        }))
        .filter(Boolean),
    [pokemonFull],
  );

  return (
    <Fragment key="pokemon">
      <div className="section">
        <div className="header-icon">
          <PokemonIcon
            pokemon={pokemon}
            size={128}
          />
          <PokemonIcon
            pokemon={pokemon}
            size={128}
            shiny
          />
        </div>
        <h1>{pokemon.name}</h1>
        <div className="names">
          <div lang="ja">{pokemon.japanese}</div>
          <div>{pokemon.english}</div>
        </div>
        {pokemon.formName ? <div className="text-xl text-gray-600 mb-4">{pokemon.formName}</div> : null}
        <Spin spinning={loading}>
          <div className="description">{pokemonFull?.description || "—"}</div>
        </Spin>
      </div>

      <div className="section">
        <h3>基本信息</h3>
        <Spin spinning={loading}>
          <Descriptions
            {...DescriptionsCommonProps}
            items={getDescriptions(pokemon, pokemonFull)}
          />
        </Spin>
        <h3>属性相克</h3>
        <TypeEffects types={pokemon.types} />
        {pokemonFull?.evolutions?.length ? (
          <>
            <h3>进化</h3>
            <PokemonEvolutionTable
              loading={loading}
              data={pokemonFull.evolutions}
            />
          </>
        ) : null}
        {allForms.length > 1 ? (
          <>
            <h3>全部形态</h3>
            <PokemonTable data={allForms} />
          </>
        ) : null}
        {pokemonFull?.obtains ? (
          <>
            <h3>获取方式</h3>
            <Descriptions
              {...DescriptionsCommonProps1}
              items={getObtainDescriptions(pokemonFull?.obtains, getPokemonFullId(pokemon))}
            />
          </>
        ) : null}
      </div>

      <div className="section">
        <h2>能力值</h2>
        <div className="text-center mb-4">总和：{pokemon.baseTotal}</div>
        <div className="max-w-3xl mx-auto space-y-4">
          {["HP", "攻击", "防御", "特攻", "特防", "速度"].map((stat, index) => (
            <PokemonStatBar
              key={stat}
              name={stat}
              value={pokemon.base[index]}
            />
          ))}
        </div>
      </div>

      <div className="section">
        <h2>等级提升</h2>
        <MoveTable<MoveLevelUp>
          extraColumns={columnsLevelUp}
          loading={loading}
          data={movesLevelUp}
        />
      </div>

      <div className="section">
        <h2>招式学习器</h2>
        <MoveTable
          extraColumns={columnsTM}
          loading={loading}
          data={movesTM}
        />
      </div>
    </Fragment>
  );
};

const PokemonDetailPage: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const pokemon = PokemonDataByName[name || ""];

  return pokemon ? <PokemonDetailPageCore data={pokemon} /> : <NotFoundPage />;
};

export default PokemonDetailPage;
