import React, { Fragment, useEffect, useState } from "react";

import { MissionTable, SideMissionMap } from "@/components";
import { HyperspaceMissionData, MainMissionData, SideMissionData } from "@/data";
import { DEFAULT_TITLE } from "@/utils";

const MissionListPage: React.FC = () => {
  useEffect(() => {
    document.title = `任务一览 - ${DEFAULT_TITLE}`;
  }, []);

  const [active, setActive] = useState<number | null>(null);

  return (
    <Fragment key="side-mission-list">
      <div className="section">
        <h1>任务一览</h1>
      </div>

      <div className="section">
        <h2>主任务</h2>
        <MissionTable
          data={MainMissionData}
          headers={["编号", "名字", "道具", "宝可梦"]}
        />
      </div>

      <div className="section">
        <h2>异次元任务</h2>
        <MissionTable
          data={HyperspaceMissionData}
          headers={["编号", "名字", "道具", "宝可梦"]}
        />
      </div>

      <div className="section">
        <h2>副任务</h2>
        <SideMissionMap
          active={active}
          setActive={setActive}
        />
        <MissionTable data={SideMissionData} />
      </div>
    </Fragment>
  );
};

export default MissionListPage;
