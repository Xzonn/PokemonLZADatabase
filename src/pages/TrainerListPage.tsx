import React, { Fragment, useEffect } from "react";

import { NormalTrainerTable } from "@/components";
import { TrainerNormal } from "@/types";
import { DEFAULT_TITLE, Link, useImport, useLoadingAnchor } from "@/utils";

const TrainerListPage: React.FC = () => {
  useEffect(() => {
    document.title = `训练家一览 - ${DEFAULT_TITLE}`;
  }, []);

  const [data, loading] = useImport(async () => (await import("@/data/tr/normal.json")).default as TrainerNormal[]);

  useLoadingAnchor([loading]);

  return (
    <Fragment key="pokemon-list">
      <div className="section">
        <h1>训练家一览</h1>
        <div className="description">
          关于对战特区中的对手，参见<Link to="/对战特区">对战特区</Link>。
        </div>
      </div>

      <div className="section">
        <p>点击每行的“＋”可以查看宝可梦详情。</p>
        <NormalTrainerTable
          loading={loading}
          data={data || []}
        />
      </div>
    </Fragment>
  );
};

export default TrainerListPage;
