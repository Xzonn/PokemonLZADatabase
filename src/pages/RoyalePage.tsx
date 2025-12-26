import { Spin } from "antd";
import React, { Fragment, useEffect } from "react";

import { ItemRewardsTable, NormalTrainerTable } from "@/components";
import royalePromotion from "@/data/tr/royale-promotion.txt?raw";
import { TrainerNormal } from "@/types";
import { DEFAULT_TITLE, Link, useImport, useLoadingAnchor } from "@/utils";

const RoyaleListPage: React.FC = () => {
  useEffect(() => {
    document.title = `ＺＡ登峰战 - ${DEFAULT_TITLE}`;
  }, []);

  const [trainerData, trainerLoading] = useImport(
    async () => (await import("@/data/tr/normal.json")).default as TrainerNormal[],
  );
  const [rewardData, rewardLoading] = useImport(async () => await import("@/data/i/obtain-reward-match"));

  const promotionIdList = royalePromotion.split("\n").filter(Boolean);
  const promotionData = trainerData?.filter((item) => promotionIdList.includes(item.id));
  const rewardTrainerData = trainerData?.filter(
    (item) => item.id.startsWith("za_inf_") && !item.id.startsWith("za_inf_strong"),
  );
  const rewardStrongData = trainerData?.filter((item) => item.id.startsWith("za_inf_strong_"));
  const rewardStrongestData = trainerData?.filter((item) => item.id.startsWith("za_inf_strongest_"));

  useLoadingAnchor([trainerLoading]);

  return (
    <Fragment key="pokemon-list">
      <div className="section">
        <h1>ＺＡ登峰战</h1>
        <div className="description">
          关于对战特区中的对手，参见：<Link to="/对战特区">对战特区</Link>。
        </div>
      </div>

      <div className="section">
        <h2>升级战的对手</h2>
        <p>点击每行的“＋”可以查看宝可梦详情。</p>
        <NormalTrainerTable
          loading={trainerLoading}
          data={promotionData || []}
        />
      </div>

      <div className="section">
        <h2>报酬战的对手（第 20 场前）</h2>
        <p>点击每行的“＋”可以查看宝可梦详情。</p>
        <NormalTrainerTable
          loading={trainerLoading}
          data={rewardTrainerData || []}
        />
      </div>

      <div className="section">
        <h2>报酬战的对手（第 20 场后）</h2>
        <p>点击每行的“＋”可以查看宝可梦详情。</p>
        <NormalTrainerTable
          loading={trainerLoading}
          data={rewardStrongData || []}
        />
      </div>

      <div className="section">
        <h2>报酬战的对手（完成《超次元爆涌》后）</h2>
        <p>点击每行的“＋”可以查看宝可梦详情。</p>
        <NormalTrainerTable
          loading={trainerLoading}
          data={rewardStrongestData || []}
        />
      </div>

      <div className="section">
        <h2>报酬战的奖励</h2>
        <Spin spinning={rewardLoading}>
          <div className="grid gap-4 lg:grid-cols-2">
            <div>
              <h3>固定奖励</h3>
              <ItemRewardsTable
                headers={["道具", "数量", "条件"]}
                data={rewardData?.ObtainDataRewardMatchGuaranteed}
              />
            </div>
            <div>
              <h3>随机奖励</h3>
              <ItemRewardsTable data={rewardData?.ObtainDataRewardMatchRandom} />
            </div>
          </div>
        </Spin>
      </div>
    </Fragment>
  );
};

export default RoyaleListPage;
