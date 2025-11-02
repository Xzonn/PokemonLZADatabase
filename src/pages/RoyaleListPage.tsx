import { useRequest } from "ahooks";
import React, { Fragment, useEffect } from "react";

import { NormalTrainerTable, RoyaleTrainerTable } from "@/components";
import royalePromotion from "@/data/tr/royale-promotion.txt?raw";
import { TrainerNormal, TrainerRoyale } from "@/types";
import { DEFAULT_TITLE, onUseRequestError } from "@/utils";

const RoyaleListPage: React.FC = () => {
  useEffect(() => {
    document.title = `ＺＡ登峰战 - ${DEFAULT_TITLE}`;
  }, []);

  const { data: royaleData = null, loading: royaleLoading } = useRequest(
    async () => (await import(`@/data/tr/royale.json`)).default as TrainerRoyale[],
    {
      onError: onUseRequestError,
    },
  );

  const { data: normalData = null, loading: normalLoading } = useRequest(
    async () => (await import(`@/data/tr/normal.json`)).default as TrainerNormal[],
    {
      onError: onUseRequestError,
    },
  );
  const promotionIdList = royalePromotion.split("\n").filter(Boolean);
  const promotionData = normalData?.filter((item) => promotionIdList.includes(item.id));
  const rewardData = normalData?.filter(
    (item) => item.id.startsWith("za_inf_") && !item.id.startsWith("za_inf_strong_"),
  );
  const rewardStrongData = normalData?.filter((item) => item.id.startsWith("za_inf_strong_"));

  return (
    <Fragment key="pokemon-list">
      <div className="section">
        <h1>ＺＡ登峰战</h1>
      </div>

      <div className="section">
        <h2>升级战的对手</h2>
        <p>点击每行的“＋”可以查看宝可梦详情。</p>
        <NormalTrainerTable
          loading={normalLoading}
          data={promotionData || []}
        />
      </div>

      <div className="section">
        <h2>报酬战的对手（第 20 场前）</h2>
        <p>点击每行的“＋”可以查看宝可梦详情。</p>
        <NormalTrainerTable
          loading={normalLoading}
          data={rewardData || []}
        />
      </div>

      <div className="section">
        <h2>报酬战的对手（第 20 场后）</h2>
        <p>点击每行的“＋”可以查看宝可梦详情。</p>
        <NormalTrainerTable
          loading={normalLoading}
          data={rewardStrongData || []}
        />
      </div>

      <div className="section">
        <h2>对战特区的对手</h2>
        <p>点击每行的“＋”可以查看宝可梦详情。</p>
        <RoyaleTrainerTable
          loading={royaleLoading}
          data={royaleData || []}
        />
      </div>
    </Fragment>
  );
};

export default RoyaleListPage;
