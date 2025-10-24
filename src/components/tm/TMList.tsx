import { useRequest } from "ahooks";
import { TableColumnsType } from "antd";
import React, { Fragment } from "react";

import { TMCell } from "../item/ItemCell";
import { MoveTable } from "../move/MoveTable";

import { ItemDataByName, MoveDataByName } from "@/data";
import { Move, TMMove } from "@/types";
import { getTMMethod, onUseRequestError } from "@/utils";

const columns: TableColumnsType<TMMove & Move> = [
  {
    title: "编号",
    dataIndex: "index",
    render: (_, row) => <TMCell item={ItemDataByName[row.tmName]} />,
    sorter: (a, b) => a.index - b.index,
  },
  {
    title: "获取方式",
    key: "method",
    render: (_, row) => getTMMethod(row),
  },
];

export const TMList: React.FC = () => {
  const { data = null, loading } = useRequest(
    async () => {
      const tmData = await import(`@/data/tm`).then((mod) => mod.TMData);
      return tmData.map((tm) => {
        const { name: tmName, ...rest } = tm;
        return {
          tmName,
          ...rest,
          ...MoveDataByName[tm.move],
        } as TMMove;
      });
    },
    {
      refreshDeps: [],
      onError: onUseRequestError,
    },
  );

  return (
    <Fragment key="tm-list">
      <div className="block">
        <h1>招式学习器一览</h1>
      </div>

      <div className="block">
        <MoveTable<TMMove>
          loading={loading}
          data={data || []}
          extraColumns={columns}
          pagination={false}
        />
      </div>
    </Fragment>
  );
};
