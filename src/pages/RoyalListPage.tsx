import React, { useEffect } from "react";

import { RoyalList } from "@/components";
import { DefaultTitle } from "@/utils";

const RoyalListPage: React.FC = () => {
  useEffect(() => {
    document.title = `ＺＡ登峰战 - ${DefaultTitle}`;
  }, []);

  return <RoyalList />;
};

export default RoyalListPage;
