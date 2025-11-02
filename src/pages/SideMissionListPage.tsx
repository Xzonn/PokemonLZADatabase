import { useRequest } from "ahooks";
import React, { Fragment, useEffect, useState } from "react";

import { SideMissionMap, SideMissionTable } from "@/components";
import { DEFAULT_TITLE, onUseRequestError } from "@/utils";

const SideMissionListPage: React.FC = () => {
  useEffect(() => {
    document.title = `副任务一览 - ${DEFAULT_TITLE}`;
  }, []);

  const { data = null, loading } = useRequest(async () => (await import("@/data/mission/side")).SideMissionData, {
    onError: onUseRequestError,
  });

  const [active, setActive] = useState<number | null>(null);

  return (
    <Fragment key="side-mission-list">
      <div className="section">
        <h1>副任务一览</h1>
      </div>

      <div className="section">
        <h2 id="地图">地图</h2>
        <SideMissionMap
          active={active}
          setActive={setActive}
        />
      </div>

      <div className="section">
        <h2>任务列表</h2>
        <SideMissionTable
          loading={loading}
          data={data || []}
        />
      </div>
    </Fragment>
  );
};

export default SideMissionListPage;
