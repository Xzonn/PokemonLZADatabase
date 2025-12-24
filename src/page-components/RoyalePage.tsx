"use client";

import React, { Fragment, useEffect } from "react";

import { ItemRewardsTable, NormalTrainerTable } from "@/components";
import royalePromotion from "@/data/tr/royale-promotion.txt?raw";
import { TrainerNormal } from "@/types";
import { DEFAULT_TITLE, Link, useImport, useLoadingAnchor } from "@/utils";

const RoyaleListPage: React.FC = () => {
  useEffect(() => {
    document.title = `ＺＡ登峰战 - ${DEFAULT_TITLE}`;
  }, []);

  const [data, loading] = useImport(async () => (await import("@/data/tr/normal.json")).default as TrainerNormal[]);

  const promotionIdList = royalePromotion.split("\n").filter(Boolean);
  const promotionData = data?.filter((item) => promotionIdList.includes(item.id));
  const rewardData = data?.filter((item) => item.id.startsWith("za_inf_") && !item.id.startsWith("za_inf_strong"));
  const rewardStrongData = data?.filter((item) => item.id.startsWith("za_inf_strong_"));
  const rewardStrongestData = data?.filter((item) => item.id.startsWith("za_inf_strongest_"));

  useLoadingAnchor([loading]);

  return (
    <Fragment key="pokemon-list">
      <div className="section">
        <h1>ＺＡ登峰战</h1>
        <div className="description">
          关于对战特区中的对手，参见<Link to="/对战特区">对战特区</Link>。
        </div>
      </div>

      <div className="section">
        <h2>升级战的对手</h2>
        <p>点击每行的“＋”可以查看宝可梦详情。</p>
        <NormalTrainerTable
          loading={loading}
          data={promotionData || []}
        />
      </div>

      <div className="section">
        <h2>报酬战的对手（第 20 场前）</h2>
        <p>点击每行的“＋”可以查看宝可梦详情。</p>
        <NormalTrainerTable
          loading={loading}
          data={rewardData || []}
        />
      </div>

      <div className="section">
        <h2>报酬战的对手（第 20 场后）</h2>
        <p>点击每行的“＋”可以查看宝可梦详情。</p>
        <NormalTrainerTable
          loading={loading}
          data={rewardStrongData || []}
        />
      </div>

      <div className="section">
        <h2>报酬战的对手（完成《超次元爆涌》后）</h2>
        <p>点击每行的“＋”可以查看宝可梦详情。</p>
        <NormalTrainerTable
          loading={loading}
          data={rewardStrongestData || []}
        />
      </div>

      <div className="section">
        <h2>报酬战的奖励</h2>
        <div className="grid gap-4 lg:grid-cols-2">
          <div>
            <h3>固定奖励</h3>
            <ItemRewardsTable
              headers={["道具", "数量", "条件"]}
              data={[
                { item: "花叶蒂进化石", quantity: 1, condition: "第 15 场胜利" },
                { item: "经验糖果Ｍ", quantity: 10, condition: "1~10 场胜利" },
                { item: "经验糖果Ｍ", quantity: 15, condition: "11~20 场胜利" },
                { item: "经验糖果Ｌ", quantity: 6, condition: "21~40 场胜利" },
                { item: "经验糖果Ｌ", quantity: 7, condition: "41~60 场胜利" },
                { item: "经验糖果Ｌ", quantity: 8, condition: "61~80 场胜利" },
                { item: "经验糖果Ｌ", quantity: 9, condition: "81~100 场胜利" },
                { item: "经验糖果Ｌ", quantity: 10, condition: "101 场胜利以上" },
              ]}
            />
          </div>
          <div>
            <h3>随机奖励</h3>
            <ItemRewardsTable
              data={[
                { item: "巨大金珠", quantity: 1, probability: 13.79 },
                { item: "ＨＰ增强剂", quantity: 5, probability: 6.9 },
                { item: "攻击增强剂", quantity: 5, probability: 6.9 },
                { item: "防御增强剂", quantity: 5, probability: 6.9 },
                { item: "特攻增强剂", quantity: 5, probability: 6.9 },
                { item: "特防增强剂", quantity: 5, probability: 6.9 },
                { item: "速度增强剂", quantity: 5, probability: 6.9 },
                { item: "银色王冠", quantity: 3, probability: 6.9 },
                { item: "金色王冠", quantity: 1, probability: 3.45 },
                { item: "王者之证", quantity: 1, probability: 3.45 },
                { item: "泡沫奶油", quantity: 1, probability: 3.45 },
                { item: "金属膜", quantity: 1, probability: 3.45 },
                { item: "香袋", quantity: 1, probability: 3.45 },
                { item: "等级球", quantity: 1, probability: 2.76 },
                { item: "月亮球", quantity: 1, probability: 2.76 },
                { item: "诱饵球", quantity: 1, probability: 2.76 },
                { item: "友友球", quantity: 1, probability: 2.76 },
                { item: "甜蜜球", quantity: 1, probability: 2.76 },
                { item: "速度球", quantity: 1, probability: 2.76 },
                { item: "沉重球", quantity: 1, probability: 2.76 },
                { item: "大师球", quantity: 1, probability: 1.38 },
              ]}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RoyaleListPage;
