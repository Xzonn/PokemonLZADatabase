"use client";

import React, { Fragment, useEffect } from "react";

import { LumioseMap } from "@/components";
import { DEFAULT_TITLE } from "@/utils";

const AreaListPage: React.FC = () => {
  useEffect(() => {
    document.title = `密阿雷地图 - ${DEFAULT_TITLE}`;
  }, []);

  return (
    <Fragment key="wild-zone-list">
      <div className="section">
        <h1>密阿雷地图</h1>
      </div>

      <div className="section">
        <LumioseMap filter={{ layers: new Set(["pc", "zone", "cafe", "building"]) }} />
      </div>
    </Fragment>
  );
};

export default AreaListPage;
