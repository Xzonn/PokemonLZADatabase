import { Descriptions, DescriptionsProps, Spin, TableColumnsType } from "antd";
import React, { Fragment, useEffect, useMemo } from "react";
import { useParams } from "@/utils/ParamsProvider";

import { PokemonTable, TMDetail } from "@/components";
import { MoveDataByName, PokemonDataById } from "@/data";
import { Move, MoveFull, Pokemon, PokemonLevelUp } from "@/types";
import {
  CategoryIcon,
  DEFAULT_TITLE,
  DescriptionsCommonProps4,
  TypeIcon,
  renderMoveLevel,
  useImport,
  useLoadingAnchor,
} from "@/utils";

import NotFoundPage from "./NotFoundPage";

const columnsLevelUp: TableColumnsType<Pokemon & PokemonLevelUp> = [
  {
    title: "等级",
    dataIndex: "level",
    render: renderMoveLevel,
    sorter: (a, b) => a.level - b.level,
  },
];

const getDescriptions = (move: Move & MoveFull): DescriptionsProps["items"] => [
  {
    key: "type",
    label: "属性",
    children: <TypeIcon type={move.type} />,
  },
  {
    key: "category",
    label: "分类",
    children: <CategoryIcon category={move.category} />,
  },
  {
    key: "power",
    label: "威力",
    children: move.category === "变化" ? "—" : move.power || "—",
  },
  {
    key: "wait",
    label: "发动时间",
    children: move.wait || "—",
  },
  {
    key: "hitPer",
    label: "命中率",
    children: move.hitPer || "—",
  },
  {
    key: "chargeFrame",
    label: "蓄力时间",
    children: move.chargeFrame || "—",
  },
  {
    key: "attackLoopFrame",
    label: "攻击循环时间",
    children: move.attackLoopFrame || "—",
  },
  {
    key: "effectTime",
    label: "能力变化时间",
    children: move.effectTime || "—",
  },
  {
    key: "wazaRange",
    label: "攻击范围",
    children: move.wazaRangeMin
      ? `${move.wazaRangeMin}${move.wazaRangeMax === move.wazaRangeMin ? "" : `~${move.wazaRangeMax}`}`
      : "—",
  },
  {
    key: "shootNum",
    label: "次数",
    children: move.minShootNum || "—",
  },
  {
    key: "effectiveRange",
    label: "有效范围",
    children: move.effectiveRange !== 99 ? move.effectiveRange : "—",
  },
  {
    key: "inflictChance",
    label: "追加效果概率",
    children: move.inflictChance ? `${move.inflictChance}%` : move.statAmps?.[2] ? `${move.statAmps?.[2]}%` : "—",
  },
  {
    key: "critStage",
    label: "击中要害率",
    children: move.critStage ? `+${move.critStage}` : "—",
  },
  {
    key: "flinch",
    label: "畏缩概率",
    children: move.flinch ? `${move.flinch}%` : "—",
  },
  {
    key: "recoil",
    label: "伤害比例",
    children: move.recoil ? `${move.recoil}%` : "—",
  },
  {
    key: "selfHeal",
    label: "回复比例",
    children: move.damageHeal ? `${move.damageHeal}%` : move.selfHeal ? `${move.selfHeal}%` : "—",
  },
];

const MoveDetailPageCore: React.FC<{ data: Move }> = ({ data: move }) => {
  useEffect(() => {
    document.title = `${move.name} - ${DEFAULT_TITLE}`;
  }, [move]);

  const [moveFull, loading] = useImport(
    async () => (await import(`@/data/m/${move.id.toString().padStart(3, "0")}.json`)).default as MoveFull,
    [move],
  );

  const pokemonLevelUp = useMemo(
    () =>
      moveFull?.pokemonLevelUp
        ?.filter((pokemon) => PokemonDataById[pokemon.fullId])
        .map((pokemon) => ({
          ...pokemon,
          ...PokemonDataById[pokemon.fullId],
        }))
        .filter(Boolean),
    [moveFull],
  );
  const pokemonTM = useMemo(
    () => moveFull?.pokemonTM?.map((pokemon) => PokemonDataById[pokemon.fullId]).filter(Boolean) || [],
    [moveFull],
  );
  const pokemonAlpha = useMemo(
    () => moveFull?.pokemonAlpha?.map((pokemon) => PokemonDataById[pokemon.fullId]).filter(Boolean) || [],
    [moveFull],
  );

  useLoadingAnchor([loading]);

  return (
    <Fragment key="move">
      <div className="section">
        <h1>{move.name}</h1>
        <div className="names">
          <div lang="ja">{move.japanese}</div>
          <div>{move.english}</div>
        </div>
        <div className="description">{move?.description || "—"}</div>
      </div>

      <div className="section">
        <h3>基本信息</h3>
        <Spin spinning={loading}>
          <Descriptions
            {...DescriptionsCommonProps4}
            items={getDescriptions({
              ...move,
              ...moveFull,
            } as Move & MoveFull)}
          />
        </Spin>
      </div>

      <div className="section">
        <h2>等级提升</h2>
        <PokemonTable<PokemonLevelUp>
          loading={loading}
          data={pokemonLevelUp}
          extraColumns={columnsLevelUp}
        />
      </div>

      {pokemonTM.length > 0 ? (
        <div className="section">
          <h2>招式学习器</h2>
          <TMDetail move={move.name} />
          <PokemonTable
            loading={loading}
            data={pokemonTM}
          />
        </div>
      ) : null}

      {pokemonAlpha.length > 0 ? (
        <div className="section">
          <h2>头目招式</h2>
          <PokemonTable
            loading={loading}
            data={pokemonAlpha}
          />
        </div>
      ) : null}
    </Fragment>
  );
};

const MoveDetailPage: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const move = MoveDataByName[name || ""];

  return move ? <MoveDetailPageCore data={move} /> : <NotFoundPage />;
};

export default MoveDetailPage;
