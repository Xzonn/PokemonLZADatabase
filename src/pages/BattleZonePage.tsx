import { Button, Table } from "antd";
import React, { Fragment, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { ItemRewardsTable, RoyaleTrainerTable } from "@/components";
import { TrainerRoyale } from "@/types";
import { DEFAULT_TITLE, TableCommonProps, halfToFull, useImport, useLoadingAnchor } from "@/utils";

const RANKS = Array.from("ZYXWVUGFEDCB∞");

const BattleZonePage: React.FC = () => {
  useEffect(() => {
    document.title = `对战特区 - ${DEFAULT_TITLE}`;
  }, []);

  const [data, loading] = useImport(async () => (await import("@/data/tr/royale.json")).default as TrainerRoyale[]);
  const sections = useMemo(
    () =>
      RANKS.map((rank) => (
        <div
          key={rank}
          className="section"
        >
          <h2>{halfToFull(rank)}级</h2>
          <p>点击每行的“＋”可以查看宝可梦详情。</p>
          <RoyaleTrainerTable
            loading={loading}
            data={data?.filter((trainer) => trainer.rank === rank) || []}
          />
        </div>
      )),
    [data, loading],
  );

  const navigate = useNavigate();

  useLoadingAnchor([loading]);

  return (
    <Fragment key="pokemon-list">
      <div className="section">
        <h1>对战特区</h1>
        <div className="flex flex-wrap gap-2 items-center justify-center">
          {RANKS.map((rank) => (
            <Button
              key={rank}
              onClick={() => navigate({ hash: `#${halfToFull(rank)}级`.toLowerCase() }, { replace: true })}
            >
              {halfToFull(rank)}级
            </Button>
          ))}
        </div>
      </div>

      <div className="section">
        <h2>说明</h2>
        <p>
          游戏中训练家的等级与主角的等级最多相差 1
          级。例如，主角为Ｙ级时，可遇到的训练家为Ｚ级、Ｙ级或Ｘ级。与训练家对战胜利后不会直接获得奖金，而是会获得奖金币，在夜晚结束时根据奖金币和击败的训练家数量进行计算：
        </p>
        <Table
          {...TableCommonProps}
          sticky={false}
          className="table-fit"
          columns={[
            {
              title: "击败人数",
              dataIndex: "count",
            },
            {
              title: "奖金币倍数",
              dataIndex: "multiple",
              render: (v) => `${v}×`,
            },
          ]}
          dataSource={[
            { count: "0-4", multiple: 1 },
            { count: "5-9", multiple: 1.5 },
            { count: "10-19", multiple: 2 },
            { count: "20-29", multiple: 2.5 },
            { count: "30+", multiple: 3 },
          ]}
          pagination={false}
        />
        <p>击败快递员后，可能会获得道具：</p>
        <div className="grid gap-4 lg:grid-cols-3">
          <div>
            <h4>∞级</h4>
            <ItemRewardsTable
              data={[
                { item: "全满药", quantity: 3, probability: 26.09 },
                { item: "活力块", quantity: 3, probability: 17.39 },
                { item: "ＨＰ增强剂", quantity: 3, probability: 8.7 },
                { item: "攻击增强剂", quantity: 3, probability: 8.7 },
                { item: "防御增强剂", quantity: 3, probability: 8.7 },
                { item: "特攻增强剂", quantity: 3, probability: 8.7 },
                { item: "特防增强剂", quantity: 3, probability: 8.7 },
                { item: "速度增强剂", quantity: 3, probability: 8.7 },
                { item: "神奇糖果", quantity: 3, probability: 4.35 },
              ]}
            />
          </div>
          <div>
            <h4>Ｆ-Ｂ级</h4>
            <ItemRewardsTable
              data={[
                { item: "高级球", quantity: 5, probability: 43.48 },
                { item: "哞哞鲜奶", quantity: 5, probability: 43.48 },
                { item: "活力碎片", quantity: 3, probability: 17.39 },
                { item: "经验糖果Ｍ", quantity: 3, probability: 4.35 },
              ]}
            />
          </div>
          <div>
            <h4>Ｚ-Ｖ级</h4>
            <ItemRewardsTable
              data={[
                { item: "超级球", quantity: 5, probability: 43.48 },
                { item: "果汁牛奶", quantity: 5, probability: 43.48 },
                { item: "密阿雷格雷派饼", quantity: 5, probability: 17.39 },
                { item: "经验糖果Ｓ", quantity: 3, probability: 4.35 },
              ]}
            />
          </div>
        </div>
      </div>

      {sections}
    </Fragment>
  );
};

export default BattleZonePage;
