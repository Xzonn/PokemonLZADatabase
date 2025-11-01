import { useRequest } from "ahooks";
import React, { Fragment, useEffect } from "react";

import { NormalTrainerTable } from "@/components";
import { TrainerNormal } from "@/types";
import { DEFAULT_TITLE, onUseRequestError } from "@/utils";

const TrainerListPage: React.FC = () => {
  useEffect(() => {
    document.title = `训练家一览 - ${DEFAULT_TITLE}`;
  }, []);

  const { data = null, loading } = useRequest(
    async () => (await import(`@/data/tr/normal.json`)).default as TrainerNormal[],
    {
      onError: onUseRequestError,
    },
  );

  return (
    <Fragment key="pokemon-list">
      <div className="block">
        <h1>训练家一览</h1>
      </div>

      <div className="block">
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
