import React, { useEffect } from "react";

import { RoyaleList } from "@/components";
import { DefaultTitle } from "@/utils";

const RoyaleListPage: React.FC = () => {
  useEffect(() => {
    document.title = `ＺＡ登峰战 - ${DefaultTitle}`;
  }, []);

  return <RoyaleList />;
};

export default RoyaleListPage;
