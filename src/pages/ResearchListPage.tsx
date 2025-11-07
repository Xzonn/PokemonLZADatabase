import React, { Fragment, useEffect } from "react";

import { ResearchRewardTable, ResearchTable } from "@/components";
import { DEFAULT_TITLE, useImport } from "@/utils";

const ResearchListPage: React.FC = () => {
  useEffect(() => {
    document.title = `茉蜜姬调查 - ${DEFAULT_TITLE}`;
  }, []);

  const [data, loading] = useImport(() => import("@/data/research"));

  return (
    <Fragment key="research-list">
      <div className="section">
        <h1>茉蜜姬调查</h1>
      </div>

      <div className="section">
        <h2>奖励</h2>
        <ResearchRewardTable
          loading={loading}
          data={data?.ResearchRewardData || []}
        />
      </div>

      <div className="section">
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
