import { FC, Fragment } from "react";

import { IMapProps } from "@/types";

import { BasicMap } from "./BasicMap";

export const SewersCh6Map: FC<IMapProps> = ({ loading, filterComponent, children }) => (
  <Fragment key="sewers-ch6-map">
    {filterComponent}
    <BasicMap
      mapKey="t3_2"
      imageSize={2160}
      loading={loading}
    >
      {children}
    </BasicMap>
  </Fragment>
);
