import { useRequest } from "ahooks";
import React, { Fragment } from "react";

import TrainerTable from "./TrainerTable";

import { TrainerRoyal } from "@/types";

const RoyalList: React.FC = () => {
  const { data = null, loading } = useRequest(
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
          <h1>ＺＡ登峰战</h1>
        </div>

        <div>
          <p className="text-sm text-slate-500 mb-4">点击每行的“＋”可以查看宝可梦详情。</p>
          <TrainerTable
            isRoyal={true}
            loading={loading}
            data={data || []}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default RoyalList;
