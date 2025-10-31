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
    async () => {
      const realData = await import(`@/data/tr/royale.json`).then((mod) => mod.default);
      return realData as TrainerRoyale[];
    },
    {
      onError: onUseRequestError,
    },
  );

  const { data: normalData = null, loading: normalLoading } = useRequest(
    async () => {
      const realData = await import(`@/data/tr/normal.json`).then((mod) => mod.default);
      return realData as TrainerNormal[];
    },
    {
      onError: onUseRequestError,
    },
  );
  const idList = royalePromotion.split("\n").filter(Boolean);
  const filteredData = normalData?.filter((item) => idList.includes(item.id));

  return (
    <Fragment key="pokemon-list">
      <div className="block">
        <h1>ＺＡ登峰战</h1>
      </div>

      <div className="block">
        <h2>升级战的对手</h2>
        <p>点击每行的“＋”可以查看宝可梦详情。</p>
        <NormalTrainerTable
          loading={normalLoading}
          data={filteredData || []}
        />
      </div>

      <div className="block">
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
