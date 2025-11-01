import { useRequest } from "ahooks";
import React, { Fragment, useEffect } from "react";

import { ResearchRewardTable, ResearchTable } from "@/components";
import { DEFAULT_TITLE, onUseRequestError } from "@/utils";

const ResearchListPage: React.FC = () => {
  useEffect(() => {
    document.title = `茉蜜姬调查 - ${DEFAULT_TITLE}`;
  }, []);

  const { data = null, loading } = useRequest(async () => await import(`@/data/research`), {
    onError: onUseRequestError,
  });

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

export default ResearchListPage;
