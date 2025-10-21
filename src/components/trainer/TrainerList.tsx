import { useRequest } from "ahooks";
import React, { Fragment } from "react";

import { NormalTrainerTable } from "./TrainerTable";

import { TrainerNormal } from "@/types";

export const TrainerList: React.FC = () => {
  const { data = null, loading } = useRequest(
    async () => {
      const realData = await import(`@/data/tr/normal.json`).then((mod) => mod.default);
      return realData as TrainerNormal[];
    },
    {
      onError: () => null,
    },
  );

  return (
    <Fragment key="pokemon-list">
      <div className="block">
        <h1>训练家一览</h1>
      </div>

      <div className="block">
        <p>点击每行的“＋”可以查看宝可梦详情。</p>
        <NormalTrainerTable
          loading={loading}
          data={data || []}
        />
      </div>
    </Fragment>
  );
};
