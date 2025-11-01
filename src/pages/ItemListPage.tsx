import { useRequest } from "ahooks";
import React, { Fragment, useEffect } from "react";

import { ItemTable } from "@/components";
import { EItemPocket, ItemPocket } from "@/types";
import { DEFAULT_TITLE, Link, onUseRequestError } from "@/utils";

const HEADERS = new Map<ItemPocket, string[]>([
  ["道具", ["编号", "道具", "买入价格", "卖出价格", "超级碎片数量", "说明"]],
  ["宝物", ["编号", "道具", "卖出价格", "说明"]],
  ["重要物品", ["编号", "道具", "彩色螺丝数量", "说明"]],
  ["超级石", ["编号", "道具", "买入价格", "超级碎片数量", "说明"]],
]);

const ItemListPage: React.FC = () => {
  useEffect(() => {
    document.title = `道具一览 - ${DEFAULT_TITLE}`;
  }, []);

  const { data: itemFullData = null, loading } = useRequest(
    async () => (await import(`@/data/i/detail`)).ItemFullData,
    {
      refreshDeps: [],
      onError: onUseRequestError,
    },
  );

  return (
    <Fragment key="pokemon-list">
      <div className="block">
        <h1>道具一览</h1>
      </div>

      {EItemPocket.map((pocket, index) => (
        <div
          key="pocket"
          className="block"
        >
          <h2>{pocket}</h2>
          {pocket === "招式学习器" ? (
            <div className="text-center">
              参见：<Link to="/招式学习器一览">招式学习器一览</Link>
            </div>
          ) : (
            <ItemTable
              loading={loading}
              headers={HEADERS.get(pocket)}
              data={itemFullData?.filter((item) => item.pocket === index)}
            />
          )}
        </div>
      ))}
    </Fragment>
  );
};

export default ItemListPage;
