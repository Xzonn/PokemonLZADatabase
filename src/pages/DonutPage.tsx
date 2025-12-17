import { FC, Fragment, useEffect } from "react";

import { DonutBerryTable, DonutButterTable, DonutFlavorTable } from "@/components";
import { DEFAULT_TITLE, useImport, useLoadingAnchor } from "@/utils";

const DonutPage: FC = () => {
  useEffect(() => {
    document.title = `甜甜圈 - ${DEFAULT_TITLE}`;
  }, []);

  const [data, loading] = useImport(async () => await import("@/data/donut"));

  useLoadingAnchor([loading]);

  return (
    <Fragment key="donut">
      <div className="section">
        <h1>甜甜圈</h1>
      </div>

      <div className="section">
        <h2>风味力量</h2>
        <DonutFlavorTable data={data?.DonutFlavors} />
      </div>

      <div className="section">
        <h2>黄油效果</h2>
        <p>在剧情中获得新的黄油后，每次制作甜甜圈时可以投入的树果数量也会增加。</p>
        <DonutButterTable data={data?.DonutButters} />
      </div>

      <div className="section">
        <h2>树果效果</h2>
        <DonutBerryTable
          loading={loading}
          data={data?.DonutBerries}
        />
      </div>
    </Fragment>
  );
};

export default DonutPage;
