import { FC, Fragment, useEffect } from "react";

import { AreaPokemonSpawn, HyperspaceWildZoneNavigation } from "@/components";
import { DEFAULT_TITLE } from "@/utils";

const AreaListPage: FC = () => {
  useEffect(() => {
    document.title = `宝可梦分布 - ${DEFAULT_TITLE}`;
  }, []);

  return (
    <Fragment key="wild-zone-list">
      <div className="section">
        <h1>宝可梦分布</h1>
      </div>

      <div className="section">
        <h2>野生异次元</h2>
        <HyperspaceWildZoneNavigation />
      </div>

      <AreaPokemonSpawn />
    </Fragment>
  );
};

export default AreaListPage;
