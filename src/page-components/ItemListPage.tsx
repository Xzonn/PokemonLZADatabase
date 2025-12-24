"use client";

import React, { Fragment, useEffect } from "react";

import { ItemTable } from "@/components";
import { EItemPocket, ItemPocket } from "@/types";
import { DEFAULT_TITLE, Link, useImport, useLoadingAnchor } from "@/utils";

const HEADERS = new Map<ItemPocket, string[]>([
  ["道具", ["编号", "道具", "买入价格", "卖出价格", "超级碎片数量", "说明"]],
  ["宝物", ["编号", "道具", "卖出价格", "说明"]],
  ["重要物品", ["编号", "道具", "彩色螺丝数量", "说明"]],
]);

const ItemListPage: React.FC = () => {
  useEffect(() => {
    document.title = `道具一览 - ${DEFAULT_TITLE}`;
  }, []);

  const [itemFullData, loading] = useImport(async () => (await import("@/data/i/detail")).ItemFullData);

  useLoadingAnchor([loading]);

  return (
    <Fragment key="pokemon-list">
      <div className="section">
        <h1>道具一览</h1>
      </div>

      {EItemPocket.map((pocket, index) => (
        <div
          key={pocket}
          className="section"
        >
          <h2>{pocket}</h2>
          {index === 0 ? (
            <p>
              说明：本页面中所有的买入价格按照卖出价格 ×2
              计算，实际价格可能有所不同，仅供参考。例如，在薄荷摊购买的薄荷实际需要 $20,000。
            </p>
          ) : (
            ""
          )}
          {pocket === "招式学习器" ? (
            <div className="text-center">
              参见：<Link to="/招式学习器一览">招式学习器一览</Link>
            </div>
          ) : pocket === "超级石" ? (
            <div className="text-center">
              参见：<Link to="/超级进化一览">超级进化一览</Link>
            </div>
          ) : (
            <ItemTable
              loading={loading}
              headers={HEADERS.get(pocket)}
              data={itemFullData?.filter((item) => item.pocket === index)}
              pagination={false}
            />
          )}
        </div>
      ))}
    </Fragment>
  );
};

export default ItemListPage;
