import React, { useEffect } from "react";

import { Map } from "@/components";
import { DefaultTitle } from "@/utils";

const MapPage: React.FC = () => {
  useEffect(() => {
    document.title = `密阿雷地图 - ${DefaultTitle}`;
  }, []);

  return <Map />;
};

export default MapPage;
