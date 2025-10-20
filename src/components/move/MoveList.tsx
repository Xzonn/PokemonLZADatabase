import { TableColumnsType } from "antd";
import React, { Fragment } from "react";

import MoveTable from "./MoveTable";

import { MoveData } from "@/data";
import { Move } from "@/types";

const columns: TableColumnsType<Move> = [
  {
    title: "编号",
    dataIndex: "id",
    sorter: (a, b) => a.id - b.id,
  },
];

const MoveList: React.FC = () => (
  <Fragment key="pokemon-list">
    <div className="text-center px-8 py-8">
      <div className="mb-12">
        <h1>招式一览</h1>
      </div>

      <div>
        <MoveTable
          data={MoveData}
          extraColumns={columns}
        />
      </div>
    </div>
  </Fragment>
);

export default MoveList;
