import { useRequest } from "ahooks";
import React, { Fragment } from "react";

import { ResearchRewardTable } from "./ResearchRewardTable";
import { ResearchTable } from "./ResearchTable";

import { onUseRequestError } from "@/utils";

export const ResearchList: React.FC = () => {
  const { data = null, loading } = useRequest(
    async () => {
      const realData = await import(`@/data/research`);
      return realData;
    },
    {
      onError: onUseRequestError,
    },
  );

  return (
    <Fragment key="research-list">
      <div className="block">
        <h1>茉蜜姬调查</h1>
      </div>

      <div className="block">
        <h2>奖励</h2>
        <ResearchRewardTable
          loading={loading}
          data={data?.ResearchRewardData || []}
        />
      </div>

      <div className="block">
        <h2>调查一览</h2>
        <ResearchTable
          loading={loading}
          data={data?.ResearchData || []}
        />
      </div>
    </Fragment>
  );
};
