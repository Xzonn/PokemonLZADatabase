import { Table, TableColumnType } from "antd";

import { ItemCell } from "../item/ItemCell";

import { ItemDataByName } from "@/data";
import { ResearchReward } from "@/types";
import { TableCommonProps } from "@/utils";

const columns: TableColumnType<ResearchReward>[] = [
  {
    title: "等级",
    dataIndex: "level",
  },
  {
    title: "道具",
    dataIndex: "item",
    render: (item) => <ItemCell item={ItemDataByName[item]} />,
  },
  {
    title: "数量",
    dataIndex: "count",
  },
];

export const ResearchRewardTable: React.FC<{ loading?: boolean; data?: ResearchReward[] }> = ({
  loading = false,
  data,
}) => (
  <Table<ResearchReward>
    {...TableCommonProps}
    rowKey="index"
    loading={loading}
    columns={columns}
    dataSource={data}
    pagination={false}
  />
);
