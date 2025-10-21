import { TableColumnsType } from "antd";
import React, { Fragment } from "react";

import { MoveTable } from "./MoveTable";

import { MoveData } from "@/data";
import { Move } from "@/types";

const columns: TableColumnsType<Move> = [
  {
    title: "编号",
    dataIndex: "id",
    sorter: (a, b) => a.id - b.id,
  },
];

export const MoveList: React.FC = () => (
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
