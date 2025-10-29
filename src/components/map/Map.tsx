import { FC } from "react";

import { LeafletMap } from "./LeafletMap";

export const Map: FC = () => {
  return (
    <div className="block">
      <h1>密阿雷地图</h1>
      <LeafletMap />
    </div>
  );
};
