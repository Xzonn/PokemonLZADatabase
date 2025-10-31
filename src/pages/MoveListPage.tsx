import { TableColumnsType } from "antd";
import React, { Fragment, useEffect } from "react";

import { MoveTable } from "@/components";
import { MoveData } from "@/data";
import { Move } from "@/types";
import { DEFAULT_TITLE } from "@/utils";

const columns: TableColumnsType<Move> = [
  {
    title: "编号",
    dataIndex: "id",
    sorter: (a, b) => a.id - b.id,
  },
];

const MoveListPage: React.FC = () => {
  useEffect(() => {
    document.title = `招式一览 - ${DEFAULT_TITLE}`;
  }, []);

  return (
    <Fragment key="pokemon-list">
      <div className="block">
        <h1>招式一览</h1>
      </div>

      <div className="block">
        <MoveTable
          data={MoveData}
          extraColumns={columns}
        />
      </div>
    </Fragment>
  );
};

export default MoveListPage;
