import { useRequest } from "ahooks";
import { Descriptions, DescriptionsProps, TableColumnsType } from "antd";
import React, { Fragment, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";

import NotFoundPage from "./NotFoundPage";

import { PokemonTable, TMDetail } from "@/components";
import { MoveDataByName, PokemonDataById } from "@/data";
import { Move, MoveFull, Pokemon, PokemonLevelUp } from "@/types";
import {
  CategoryIcon,
  DEFAULT_TITLE,
  DescriptionsCommonProps,
  TypeIcon,
  onUseRequestError,
  renderMoveLevel,
} from "@/utils";

const columnsLevelUp: TableColumnsType<Pokemon & PokemonLevelUp> = [
  {
    title: "等级",
    dataIndex: "level",
    render: renderMoveLevel,
    sorter: (a, b) => a.level - b.level,
  },
];

const getDescriptions = (move: Move): DescriptionsProps["items"] => [
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
    label: "等待时间",
    children: move.wait || "—",
  },
];

const MoveDetailPageCore: React.FC<{ data: Move }> = ({ data: move }) => {
  useEffect(() => {
    document.title = `${move.name} - ${DEFAULT_TITLE}`;
  }, [move]);

  const { data: moveFull = null, loading } = useRequest(
    async () => (await import(`@/data/m/${move.id.toString().padStart(3, "0")}.json`)).default as MoveFull,
    {
      refreshDeps: [move],
      onError: onUseRequestError,
    },
  );

  const pokemonLevelUp = useMemo(
    () =>
      moveFull?.pokemonLevelUp
        .filter((pokemon) => PokemonDataById[pokemon.fullId])
        .map((pokemon) => ({
          ...pokemon,
          ...PokemonDataById[pokemon.fullId],
        }))
        .filter(Boolean),
    [moveFull],
  );
  const pokemonTM = useMemo(
    () =>
      moveFull?.pokemonTM
        .filter((pokemon) => PokemonDataById[pokemon.fullId])
        .map((pokemon) => ({
          ...pokemon,
          ...PokemonDataById[pokemon.fullId],
        }))
        .filter(Boolean),
    [moveFull],
  );

  return (
    <Fragment key="move">
      <div className="block">
        <h1>{move.name}</h1>
        <div className="names">
          <div lang="ja">{move.japanese}</div>
          <div>{move.english}</div>
        </div>
        <div className="description">{move?.description || "—"}</div>
      </div>

      <div className="block">
        <h3>基本信息</h3>
        <Descriptions
          {...DescriptionsCommonProps}
          className="description-4"
          column={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 2, xxl: 4 }}
          items={getDescriptions(move)}
        />
      </div>

      <div className="block">
        <h2>等级提升</h2>
        <PokemonTable<PokemonLevelUp>
          loading={loading}
          data={pokemonLevelUp}
          extraColumns={columnsLevelUp}
        />
      </div>
      {(pokemonTM?.length || 0) > 0 ? (
        <div className="block">
          <h2>招式学习器</h2>
          <TMDetail move={move.name} />
          <PokemonTable
            loading={loading}
            data={pokemonTM}
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
