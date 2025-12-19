import { Descriptions, DescriptionsProps, Spin, Tooltip } from "antd";
import React, { FC, Fragment, useEffect, useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";

import { ItemIconWithoutTooltip, MissionTable } from "@/components";
import { ItemDataByName, MissionData } from "@/data";
import { EItemPocket, Item, ItemFull } from "@/types";
import { DEFAULT_TITLE, DescriptionsCommonProps4, useImport, useLoadingAnchor } from "@/utils";

import NotFoundPage from "./NotFoundPage";

const getDescriptions = (item: Item, itemFull: ItemFull | undefined): DescriptionsProps["items"] => [
  {
    key: "id",
    label: "编号",
    children: item.id,
  },
  {
    key: "pocket",
    label: "口袋",
    children: itemFull !== null ? EItemPocket[itemFull?.pocket || 0] : "—",
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
