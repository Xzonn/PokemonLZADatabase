import React, { useEffect } from "react";

import { SideMissionList } from "@/components";
import { DefaultTitle } from "@/utils";

const SideMissionListPage: React.FC = () => {
  useEffect(() => {
    document.title = `副任务一览 - ${DefaultTitle}`;
  }, []);

  return <SideMissionList />;
};

export default SideMissionListPage;
