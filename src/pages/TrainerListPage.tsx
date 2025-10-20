import React, { useEffect } from "react";

import { TrainerList } from "@/components";
import { DefaultTitle } from "@/utils";

const TrainerListPage: React.FC = () => {
  useEffect(() => {
    document.title = `训练家一览 - ${DefaultTitle}`;
  }, []);

  return <TrainerList />;
};

export default TrainerListPage;
