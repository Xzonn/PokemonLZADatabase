import React, { useEffect } from "react";

import { TMList } from "@/components";
import { DefaultTitle } from "@/utils";

const TMListPage: React.FC = () => {
  useEffect(() => {
    document.title = `招式学习器一览 - ${DefaultTitle}`;
  }, []);

  return <TMList />;
};

export default TMListPage;
