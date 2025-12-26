import { Descriptions, DescriptionsProps, Spin, Tooltip } from "antd";
import React, { FC, Fragment, ReactNode, useEffect, useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";

import { ItemIconWithoutTooltip, MissionLink, MissionTable } from "@/components";
import { ItemDataByName, MissionData } from "@/data";
import { EItemPocket, Item, ItemFull } from "@/types";
import { DEFAULT_TITLE, DescriptionsCommonProps4, Link, useImport, useLoadingAnchor } from "@/utils";

import NotFoundPage from "./NotFoundPage";

const HYPERSPACE_MAP: Record<string, string> = {
  头: "头目训练家",
  收: "宝可梦收藏家",
  快: "快递员",
  女: "千金小姐",
  男: "富家少爷",
  金: "金色精灵球",
  大: "大型精灵球",
  小: "小型精灵球",
  闪: "闪闪发光的道具",
};

const renderObtain = (obtains: string[]): ReactNode => {
  const nodes: ReactNode[] = [];
  const hyperspace: Record<string, string[]> = {};
  const pickups = new Set<string>();
  for (const obtain of obtains) {
    switch (obtain[0]) {
      case "调":
        nodes.push(<Link to="/茉蜜姬调查#奖励">茉蜜姬调查</Link>);
        continue;
      case "阔":
        nodes.push(<Link to="/i/超级碎片#作用">阔星公司前台工作人员兑换</Link>);
        continue;
      case "匿":
        nodes.push(<Link to="/i/超级碎片#作用">翡绿７号街区无名男性兑换</Link>);
        continue;
      case "球":
        nodes.push(<>精灵球馆购买</>);
        continue;
      case "石":
        nodes.push(<>石头馆购买</>);
        continue;
      case "中":
        nodes.push(<>宝可梦中心购买</>);
        continue;
      case "报":
        nodes.push(<Link to="/ＺＡ登峰战#报酬战的奖励">报酬战的奖励</Link>);
        continue;
      case "塔":
        nodes.push(
          <>
            <Link to="/tr/塔拉刚">塔拉刚</Link>处购买，需完成“
            <MissionLink
              category="副"
              index={120}
            />
            ”
          </>,
        );
        continue;
      case "异": {
        const subKey = obtain[3] === "力" ? `${HYPERSPACE_MAP[obtain[1]]}（需要道具力）` : HYPERSPACE_MAP[obtain[1]];
        if (!hyperspace[subKey]) {
          hyperspace[subKey] = [];
        }
        const star = obtain[2] ? (obtain[2] === "6" ? "失控超级进化" : `${obtain[2]} 星级`) : "所有星级";
        hyperspace[subKey].push(star);
        continue;
      }
      case "捡": {
        pickups.add(obtain.slice(1));
        continue;
      }
      default:
        nodes.push(obtain);
    }
  }
  if (pickups.size) {
    nodes.push(
      <>
        捡拾：
        {[...pickups].map((location, i) => (
          <>
            {i === 0 ? null : "、"}
            <Link to={`/area/${location}#道具分布`}>{location}</Link>
          </>
        ))}
      </>,
    );
  }
  if (Object.keys(hyperspace).length) {
    nodes.push(
      <>
        <Link to="/异次元密阿雷#可以获得的道具">异次元密阿雷</Link>：
        <ul>
          {Object.entries(hyperspace).map(([key, values]) => (
            <li key={key}>
              {key}：{values.length === 5 ? "所有星级" : values.join("、")}
            </li>
          ))}
        </ul>
      </>,
    );
  }

  return (
    <ul>
      {nodes.map((way, index) => (
        <li key={index}>{way}</li>
      ))}
    </ul>
  );
};

const getDescriptions = (item: Item, itemFull: ItemFull | undefined): DescriptionsProps["items"] => [
  {
    key: "id",
    label: "编号",
    children: item.id,
  },
  {
    key: "pocket",
    label: "口袋",
    children:
      itemFull !== null
        ? (() => {
            const pocket = EItemPocket[itemFull?.pocket || 0];
            const link =
              pocket === "招式学习器"
                ? "/招式学习器一览"
                : pocket === "超级石"
                  ? "/超级进化一览"
                  : `/道具一览#${pocket}`;
            return <Link to={link}>{pocket}</Link>;
          })()
        : "—",
  },
  {
    key: "price",
    label: (
      <Tooltip
        title="买入价格按照卖出价格 ×2 计算，实际价格可能有所不同"
        className="underline decoration-dashed"
      >
        买入价格
      </Tooltip>
    ),
    children: itemFull?.price ? `$${itemFull.price.toLocaleString("zh-CN")}` : "—",
  },
  {
    key: "sellPrice",
    label: "卖出价格",
    children: itemFull?.price ? `$${(itemFull.price / 2).toLocaleString("zh-CN")}` : "—",
  },
  ...(itemFull?.obtain.length
    ? [
        {
          key: "obtain",
          label: "获取方式",
          children: renderObtain(itemFull.obtain),
          span: 4,
        },
      ]
    : []),
];

const ItemDetailPageCore: React.FC<{ data: Item }> = ({ data: item }) => {
  useEffect(() => {
    document.title = `${item.name} - ${DEFAULT_TITLE}`;
  }, [item]);

  const [itemFullData, loadingFull] = useImport(async () => (await import("@/data/i/detail")).ItemFullDataById);
  const [ItemContent, loadingContent, { error }] = useImport(
    async () => (await import(`@/data/i/${item.id.toString().padStart(4, "0")}.tsx`)).default as FC,
    [item],
    true,
  );
  const filteredMissions = useMemo(
    () => MissionData?.filter((mission) => mission.items.some((it) => it.item === item.name)),
    [item.name],
  );

  useLoadingAnchor([loadingFull, loadingContent]);

  return (
    <Fragment key="item">
      <div className="section">
        <div className="header-icon">
          <ItemIconWithoutTooltip
            item={item}
            size={128}
          />
        </div>
        <h1>{item.name}</h1>
        <Spin spinning={loadingFull}>
          <div className="names">
            <div lang="ja">{itemFullData?.[item.id].japanese ?? "—"}</div>
            <div>{itemFullData?.[item.id].english ?? "—"}</div>
          </div>
          <div className="description">{itemFullData?.[item.id].description ?? "—"}</div>
        </Spin>
      </div>

      <div className="section">
        <h3>基本信息</h3>
        <Spin spinning={loadingFull}>
          <Descriptions
            {...DescriptionsCommonProps4}
            items={getDescriptions(item, itemFullData?.[item.id])}
          />
        </Spin>
      </div>

      {filteredMissions?.length ? (
        <div className="section">
          <h2>相关任务</h2>
          <MissionTable data={filteredMissions} />
        </div>
      ) : null}

      {!error && ItemContent ? <ItemContent /> : null}
    </Fragment>
  );
};

const ItemDetailPage: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const item = ItemDataByName[name || ""];

  if (item?.page && item.page !== `i/${name}`) {
    return (
      <Navigate
        to={`/${item.page}`}
        replace
      />
    );
  }

  return item ? <ItemDetailPageCore data={item} /> : <NotFoundPage />;
};

export default ItemDetailPage;
