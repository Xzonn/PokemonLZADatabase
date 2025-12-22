import { FC, Fragment } from "react";

import { IMapProps } from "@/types";

import { BasicMap } from "./BasicMap";

export const LysandreLabsMap: FC<IMapProps> = ({ loading, filterComponent, children }) => (
  <Fragment key="lysandre-labs-map">
    {filterComponent}
    <BasicMap
      mapKey="t2"
      imageSize={2160}
      loading={loading}
    >
      {children}
    </BasicMap>
  </Fragment>
);
