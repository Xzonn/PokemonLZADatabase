import { FC, Fragment } from "react";

import { IMapProps } from "@/types";

import { BasicMap } from "./BasicMap";

export const SewersCh5Map: FC<IMapProps> = ({ loading, filterComponent, children }) => (
  <Fragment key="sewers-ch5-map">
    {filterComponent}
    <BasicMap
      mapKey="t3"
      imageSize={2160}
      loading={loading}
    >
      {children}
    </BasicMap>
  </Fragment>
);
