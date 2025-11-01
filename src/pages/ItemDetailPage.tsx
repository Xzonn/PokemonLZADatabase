import { useRequest } from "ahooks";
import { Descriptions, DescriptionsProps, Spin } from "antd";
import React, { Fragment, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";

import NotFoundPage from "./NotFoundPage";

import { ItemIconWithoutTooltip } from "@/components";
import { ItemDataByName } from "@/data";
import { EItemPocket, Item, ItemFull } from "@/types";
import { DEFAULT_TITLE, DescriptionsCommonProps, onUseRequestError } from "@/utils";

const getDescriptions = (item: Item, itemFull: ItemFull | null): DescriptionsProps["items"] => [
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
    label: "买入价格",
    children: itemFull !== null && itemFull.price ? `$${itemFull.price}` : "—",
  },
  {
    key: "sellPrice",
    label: "卖出价格",
    children: itemFull !== null && itemFull.price ? `$${itemFull.price / 2}` : "—",
  },
];

const ItemDetailPageCore: React.FC<{ data: Item }> = ({ data: item }) => {
  useEffect(() => {
    document.title = `${item.name} - ${DEFAULT_TITLE}`;
  }, [item]);

  const { data: itemFull = null, loading: loadingFull } = useRequest(
    async () => (await import(`@/data/i/detail`)).ItemFullDataById[item.id] || null,
    {
      refreshDeps: [item],
      onError: onUseRequestError,
    },
  );

  const { data: ItemContent = null } = useRequest(
    async () => (await import(`@/data/i/${item.id.toString().padStart(4, "0")}.tsx`)).default || null,
    {
      refreshDeps: [item],
      onError: (error) => {
        if (error.message.includes("Unknown variable dynamic import")) {
          return;
        }
        onUseRequestError(error);
      },
    },
  );

  return (
    <Fragment key="item">
      <div className="block">
        <div className="flex gap-8 align-center justify-center mb-4">
          <ItemIconWithoutTooltip
            item={item}
            size={128}
          />
        </div>
        <h1>{item.name}</h1>
        <Spin spinning={loadingFull}>
          <div className="names">
            <div lang="ja">{itemFull?.japanese ?? "—"}</div>
            <div>{itemFull?.english ?? "—"}</div>
          </div>
          <div className="description">{itemFull?.description ?? "—"}</div>
        </Spin>
      </div>

      <div className="block">
        <h3>基本信息</h3>
        <Spin spinning={loadingFull}>
          <Descriptions
            {...DescriptionsCommonProps}
            column={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 2, xxl: 4 }}
            items={getDescriptions(item, itemFull)}
          />
        </Spin>
      </div>

      {ItemContent ? <ItemContent /> : null}
    </Fragment>
  );
};

const ITEM_WHITELIST = ["彩色螺丝"];

const ItemDetailPage: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const item = ItemDataByName[name || ""];

  if (item.page && item.page !== `i/${name}`) {
    return (
      <Navigate
        to={`/${item.page}`}
        replace
      />
    );
  }

  return item && ITEM_WHITELIST.includes(item.name) ? <ItemDetailPageCore data={item} /> : <NotFoundPage />;
};

export default ItemDetailPage;
