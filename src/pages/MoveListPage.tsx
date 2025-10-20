import React, { useEffect } from "react";

import { MoveList } from "@/components";
import { DefaultTitle } from "@/utils";

const MoveListPage: React.FC = () => {
  useEffect(() => {
    document.title = `招式一览 - ${DefaultTitle}`;
  }, []);

  return <MoveList />;
};

export default MoveListPage;
