import React, { useEffect } from "react";

import { ResearchList } from "@/components";
import { DefaultTitle } from "@/utils";

const ResearchListPage: React.FC = () => {
  useEffect(() => {
    document.title = `茉蜜姬调查 - ${DefaultTitle}`;
  }, []);

  return <ResearchList />;
};

export default ResearchListPage;
