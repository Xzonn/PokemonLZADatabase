import { Descriptions, DescriptionsProps, Spin, Tooltip } from "antd";
import { FC, Fragment, useEffect, useMemo, useState } from "react";

import { ItemList, NormalTrainerTable, PokemonList, PrevNext, SideMissionMap } from "@/components";
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
      children: data?.process.length ? <ul>{data?.process.map((step, i) => <li key={i}>{step}</li>) || "—"}</ul> : "—",
      span: 4,
    },
    {
      key: "note",
      label: "备注",
      children: data?.note || "—",
      span: data?.note ? 4 : 0,
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
    if (data?.information.trainers) {
      return trData.filter((item) => data.information.trainers?.includes(item.id));
    } else if (category === "副" && data?.information.internal) {
      return trData.filter((item) =>
        item.id.startsWith(`Ev_sub_${data.information.internal.toString().padStart(3, "0")}_`),
      );
    }
    return [];
  }, [category, data?.information, trData]);

  const { information = null, default: Content = null } = data || {};
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

  const { prev, next } = useMemo(() => {
    switch (category) {
      case "主": {
        const missionNumber = parseInt(mission, 10);
        const prev =
          missionNumber > 1
            ? {
                link: `/main/${(missionNumber - 1).toString().padStart(3, "0")}`,
                name: `主任务 ${(missionNumber - 1).toString().padStart(3, "0")}`,
              }
            : undefined;
        const next =
          missionNumber < 42
            ? {
                link: `/main/${(missionNumber + 1).toString().padStart(3, "0")}`,
                name: `主任务 ${(missionNumber + 1).toString().padStart(3, "0")}`,
              }
            : {
                link: "/hyperspace/001",
                name: "异次元任务 001",
              };
        return { prev, next };
      }
      case "异": {
        const missionNumber = parseInt(mission, 10);
        const prev =
          missionNumber > 1
            ? {
                link: `/hyperspace/${(missionNumber - 1).toString().padStart(3, "0")}`,
                name: `异次元任务 ${(missionNumber - 1).toString().padStart(3, "0")}`,
              }
            : {
                link: "/main/042",
                name: "主任务 042",
              };
        const next =
          missionNumber < 14
            ? {
                link: `/hyperspace/${(missionNumber + 1).toString().padStart(3, "0")}`,
                name: `异次元任务 ${(missionNumber + 1).toString().padStart(3, "0")}`,
              }
            : undefined;
        return { prev, next };
      }
      case "副": {
        if (mission.startsWith("EX")) {
          const exNumber = parseInt(mission.slice(2), 10);
          const prev =
            exNumber > 1
              ? {
                  link: `/side/EX${exNumber - 1}`,
                  name: `副任务 EX${exNumber - 1}`,
                }
              : {
                  link: "/side/200",
                  name: "副任务 200",
                };
          const next =
            exNumber < 3
              ? {
                  link: `/side/EX${exNumber + 1}`,
                  name: `副任务 EX${exNumber + 1}`,
                }
              : undefined;
          return { prev, next };
        } else {
          const missionNumber = parseInt(mission, 10);
          const prev =
            missionNumber > 1
              ? {
                  link: `/side/${(missionNumber - 1).toString().padStart(3, "0")}`,
                  name: `副任务 ${(missionNumber - 1).toString().padStart(3, "0")}`,
                }
              : undefined;
          const next =
            missionNumber < 200
              ? {
                  link: `/side/${(missionNumber + 1).toString().padStart(3, "0")}`,
                  name: `副任务 ${(missionNumber + 1).toString().padStart(3, "0")}`,
                }
              : {
                  link: "/side/EX1",
                  name: "副任务 EX1",
                };
          return { prev, next };
        }
      }
    }
  }, [category, mission]);

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
        <PrevNext
          prev={prev}
          next={next}
        />
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

      {Content ? <Content /> : null}

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
