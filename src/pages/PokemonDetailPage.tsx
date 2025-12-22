import { Descriptions, DescriptionsProps, Spin, TableColumnsType } from "antd";
import React, { Fragment, useEffect, useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";

import {
  MissionTable,
  MoveTable,
  PokemonEvolutionTable,
  PokemonIcon,
  PokemonStatBar,
  PokemonTable,
  TypeEffects,
} from "@/components";
import { MissionData, MoveDataById, PokemonData, PokemonDataByName } from "@/data";
import { Move, MoveLevelUp, MoveTM, Pokemon, PokemonForm, PokemonFull } from "@/types";
import {
  DEFAULT_TITLE,
  DescriptionsCommonProps1,
  DescriptionsCommonProps,
  Link,
  TypeIcons,
  getPokemonFullId,
  getPokemonFullName,
  getPokemonFullNameFriendly,
  renderMoveLevel,
  useImport,
  useLoadingAnchor,
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

const Stat = ["HP", "攻击", "防御", "特攻", "特防", "速度"] as const;

const renderGender = (gender: [number, number]): string => {
  switch (gender[0]) {
    case 0:
      switch (gender[1]) {
        case 12:
          return "1 ♀ : 7 ♂";

        case 25:
          return "1 ♀ : 3 ♂";

        case 50:
          return "1 ♀ : 1 ♂";

        case 75:
          return "3 ♀ : 1 ♂";

        case 88:
          return "7 ♀ : 1 ♂";

        default:
          return "";
      }

    case 1:
      return "全为 ♂";

    case 2:
      return "全为 ♀";

    case 3:
      return "无性别";

    default:
      break;
  }
  return `${gender[0]}, ${gender[1]}`;
};

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
    children: pokemon.dex > 0 && pokemon.dex <= 232 ? pokemon.dex.toString().padStart(3, "0") : "—",
  },
  {
    key: "dexHyperspace",
    label: "异次元图鉴",
    children: pokemon.dexHyperspace <= 132 ? pokemon.dexHyperspace.toString().padStart(3, "0") : "—",
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
  {
    key: "gender",
    label: "性别比例",
    children: pokemonFull?.gender ? renderGender(pokemonFull.gender) : "—",
  },
  {
    key: "evYield",
    label: "获得基础点数",
    children:
      pokemonFull?.evYield
        .map((value, index) => [value, Stat[index]])
        .filter(([value]) => value)
        .map(([value, stat]) => `${stat} +${value}`)
        .join("、") || "—",
  },
];

const getObtainDescriptions = (obtains: PokemonFull["obtains"], form: PokemonForm): DescriptionsProps["items"] =>
  [
    obtains?.onMap
      ? {
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
        }
      : null,
    obtains?.areas?.length
      ? {
          key: "areas",
          label: "出现地点",
          children:
            obtains?.areas?.map((area, index) => (
              <>
                {index === 0 ? null : "、"}
                <Link
                  id={area}
                  to={`/area/${area}`}
                  onClick={() => localStorage.setItem("za-spawn-filter", JSON.stringify({ pokemonForm: form }))}
                >
                  {area}
                </Link>
              </>
            )) || "—",
        }
      : null,
    obtains?.hyperspace
      ? {
          key: "hyperspace",
          label: "野生异次元",
          children: Object.entries(obtains.hyperspace).map(([type, stars]) => (
            <div key={type}>
              <Link
                to={`/h/${type}`}
                onClick={() =>
                  localStorage.setItem("za-hyperspace-spawn-filter", JSON.stringify({ pokemonForm: form }))
                }
              >
                {type === "传说" ? "传说的宝可梦" : `${type}属性`}
              </Link>
              ：
              {Object.entries(stars).map(([star, indexes], index) => (
                <span key={star}>
                  {index === 0 ? null : "、"}
                  <Link
                    to={`/h/${type}#heading-${star}-星级`}
                    onClick={() =>
                      localStorage.setItem("za-hyperspace-spawn-filter", JSON.stringify({ pokemonForm: form }))
                    }
                  >
                    {star} 星级
                  </Link>
                  （#{indexes.join("、#")}）
                </span>
              ))}
            </div>
          )),
        }
      : null,
  ].filter(Boolean) as DescriptionsProps["items"];

const PokemonDetailPageCore: React.FC<{ data: Pokemon }> = ({ data: pokemon }) => {
  useEffect(() => {
    document.title = `${getPokemonFullNameFriendly(pokemon)} - ${DEFAULT_TITLE}`;
  }, [pokemon]);

  const [pokemonFull, loading] = useImport(
    async () => (await import(`@/data/p/${getPokemonFullId(pokemon)}.json`)).default as PokemonFull,
    [pokemon],
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

  const filteredMissions = useMemo(
    () => MissionData?.filter((mission) => mission.pokemon.some((p) => p.name === getPokemonFullName(pokemon))),
    [pokemon],
  );

  useLoadingAnchor([loading]);

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
            <h3>进化链</h3>
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

      {filteredMissions?.length ? (
        <div className="section">
          <h2>相关任务</h2>
          <MissionTable data={filteredMissions} />
        </div>
      ) : null}

      <div className="section">
        <h2>能力值</h2>
        <div className="text-center mb-4">总和：{pokemon.baseTotal}</div>
        <div className="max-w-3xl mx-auto space-y-4">
          {Stat.map((stat, index) => (
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

      {pokemonFull?.movesAlpha ? (
        <div className="section">
          <h2>头目招式</h2>
          <MoveTable
            loading={loading}
            data={[MoveDataById[pokemonFull.movesAlpha]]}
          />
        </div>
      ) : null}
    </Fragment>
  );
};

const PokemonDetailPage: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  if (name?.endsWith("-0")) {
    return (
      <Navigate
        to={`/p/${name.slice(0, -2)}`}
        replace
      />
    );
  }

  const pokemon = PokemonDataByName[name || ""];

  return pokemon ? <PokemonDetailPageCore data={pokemon} /> : <NotFoundPage />;
};

export default PokemonDetailPage;
