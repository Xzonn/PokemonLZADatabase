import { Descriptions, DescriptionsProps, Spin, Tooltip } from "antd";
import { FC, Fragment, useEffect, useMemo, useState } from "react";

import { ItemList, NormalTrainerTable, PokemonList, SideMissionMap } from "@/components";
import { MissionData } from "@/data";
import { MissionCategory, MissionDetail, MissionFull, MissionSummary, TrainerNormal } from "@/types";
import {
  DEFAULT_TITLE,
  DescriptionsCommonProps4,
  getMissionCategory,
  getMissionDirectory,
  getMissionIndex,
  useImport,
  useLoadingAnchor,
} from "@/utils";

const getDescriptions = (
  category: MissionCategory,
  data?: MissionDetail | null,
  summary?: MissionSummary | null,
): DescriptionsProps["items"] =>
  [
    {
      key: "index",
      label: "编号",
      children: getMissionIndex(data?.index || 0),
      span: category === "副" ? undefined : 4,
    },
    {
      key: "requester",
      label: "委托人",
      children: summary?.requester || "—",
      span: category === "副" ? undefined : 0,
    },
    {
      key: "prize",
      label: "奖金",
      children: `$${summary?.prize.toLocaleString("zh-CN") || "—"}`,
      span: category === "副" ? 2 : 0,
    },
    {
      key: "items",
      label: "道具",
      children: summary?.items?.length ? <ItemList items={summary.items} /> : "—",
      span: 2,
    },
    {
      key: "pokemon",
      label: (
        <Tooltip
          title="仅列入能够获得的宝可梦"
          className="underline decoration-dashed"
        >
          宝可梦
        </Tooltip>
      ),
      children: summary?.pokemon?.length ? <PokemonList pokemon={summary?.pokemon} /> : "—",
      span: 2,
    },
    {
      key: "location",
      label: "领取地点",
      children: data?.location || "—",
      span: category === "副" ? 2 : 0,
    },
    {
      key: "unlockCondition",
      label: "解锁条件",
      children: data?.unlockCondition === null ? "自动解锁" : data?.unlockCondition || "—",
      span: category === "副" ? 2 : 0,
    },
    {
      key: "process",
      label: "任务概要",
      children: data?.process.length ? <ul>{data?.process.map((step) => <li key={step}>{step}</li>) || "—"}</ul> : "—",
      span: 4,
    },
  ].filter((item) => item.span !== 0);

interface IProps {
  category: MissionCategory;
  mission: string;
}

export const MissionDetailComponent: FC<IProps> = ({ category, mission }) => {
  useEffect(() => {
    document.title = `${getMissionCategory(category)} ${mission} - ${DEFAULT_TITLE}`;
  }, [category, mission]);

  const [data, loading] = useImport(
    () => import(`@/data/mission/${getMissionDirectory(category)}/${mission}.tsx`) as Promise<MissionFull>,
    [category, mission],
  );
  const [trData, trLoading] = useImport(async () => (await import("@/data/tr/normal.json")).default as TrainerNormal[]);

  const trDataFiltered = useMemo(() => {
    if (!trData?.length) return [];
    if (category === "副" && data?.information.internal) {
      return trData.filter((item) =>
        item.id.startsWith(`Ev_sub_${data.information.internal.toString().padStart(3, "0")}_`),
      );
    }
    return [];
  }, [category, data?.information.internal, trData]);

  const { information = null, default: Content } = data || {};
  const missionSummary = useMemo(
    () => MissionData?.find((item) => item.index === information?.index && item.category === category),
    [category, information?.index],
  );

  const [active, setActive] = useState<number | null>(null);
  useEffect(() => {
    setActive(information?.index || null);
  }, [information]);

  const descriptions = useMemo(
    () => getDescriptions(category, information, missionSummary),
    [category, information, missionSummary],
  );

  useLoadingAnchor([loading, trLoading]);

  return (
    <Fragment key="side-mission-detail">
      <div className="section">
        <Spin spinning={loading}>
          <h1>
            {getMissionCategory(category)} {mission}：{missionSummary?.name || "—"}
          </h1>
          <div className="description">{information?.summary || "—"}</div>
        </Spin>
      </div>

      <div className="section">
        <h3>基本信息</h3>
        <Spin spinning={loading}>
          <Descriptions
            {...DescriptionsCommonProps4}
            items={descriptions}
          />
        </Spin>
      </div>

      {category === "副" ? (
        <div className="section">
          <h2>地点</h2>
          <SideMissionMap
            active={active}
            setActive={setActive}
          />
        </div>
      ) : null}

      {trDataFiltered?.length > 0 ? (
        <div className="section">
          <h2>相关训练家</h2>
          <p>点击每行的“＋”可以查看宝可梦详情。</p>
          <NormalTrainerTable
            loading={trLoading || loading}
            data={trDataFiltered || []}
          />
        </div>
      ) : null}

      {Content ? <Content /> : null}

      {information?.bvid && information?.cid ? (
        <div className="section">
          <h2>任务视频</h2>
          <div className="video-container">
            <iframe
              className="bilibili-player"
              src={`//player.bilibili.com/player.html?bvid=${information.bvid}&cid=${information.cid}&autoplay=1&muted=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};
