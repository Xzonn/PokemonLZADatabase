import { useRequest } from "ahooks";
import React, { Fragment } from "react";

import TrainerTable from "./TrainerTable";

import { TrainerNormal, TrainerRoyal } from "@/types";

const TrainerList: React.FC = () => {
  const { data: normalData = null, loading: normalLoading } = useRequest(
    async () => {
      const realData = await import(`@/data/tr/normal.json`).then((mod) => mod.default);
      return realData as TrainerNormal[];
    },
    {
      onError: () => null,
    },
  );

  const { data: royalData = null, loading: royalLoading } = useRequest(
    async () => {
      const realData = await import(`@/data/tr/royal.json`).then((mod) => mod.default);
      return realData as TrainerRoyal[];
    },
    {
      onError: () => null,
    },
  );

  return (
    <Fragment key="pokemon-list">
      <div className="text-center px-8 py-8">
        <div className="mb-12">
          <h1>训练家一览</h1>
        </div>

        <div>
          <h2>常规对战</h2>
          <TrainerTable
            loading={normalLoading}
            data={normalData || []}
          />
        </div>

        <div>
          <h2>ＺＡ登峰战</h2>
          <TrainerTable
            loading={royalLoading}
            data={royalData || []}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default TrainerList;
