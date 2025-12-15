import { Table, TableColumnType } from "antd";

import { SideMissionSummary } from "@/types";
import { Link, TableCommonProps, getSideMissionNumber } from "@/utils";

import { ItemList } from "../item";

const columns: TableColumnType<SideMissionSummary>[] = [
  {
    title: "编号",
    dataIndex: "index",
    render: getSideMissionNumber,
  },
  {
    title: "名字",
    dataIndex: "name",
    render: (name, row) => <Link to={`/side/${getSideMissionNumber(row.index)}`}>{name}</Link>,
  },
  {
    title: "委托人",
    dataIndex: "requester",
    render: (value: string) => value || "—",
  },
  {
    title: "奖金",
    dataIndex: "prize",
    render: (value: number) => `$${value.toLocaleString("zh-CN")}`,
  },
  {
    title: "道具",
    dataIndex: "items",
    render: (items: { item: string; number: number }[]) => <ItemList items={items} />,
  },
];

export const SideMissionTable: React.FC<{
  loading?: boolean;
  data?: SideMissionSummary[];
}> = ({ loading = false, data }) => (
  <Table<SideMissionSummary>
    {...TableCommonProps}
    rowKey="index"
    loading={loading}
    columns={columns}
    dataSource={data}
    pagination={false}
  />
);
