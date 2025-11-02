import { Table, TableColumnType } from "antd";

import { ItemList } from "../item";

import { SideMission } from "@/types";
import { Link, TableCommonProps } from "@/utils";

const columns: TableColumnType<SideMission>[] = [
  {
    title: "编号",
    dataIndex: "index",
    render: (index) => (index > 0 ? index.toString().padStart(3, "0") : `EX${-index}`),
  },
  {
    title: "名字",
    dataIndex: "name",
    render: (name, row) => (
      <Link to={`/side/${row.index > 0 ? row.index.toString().padStart(3, "0") : `EX${-row.index}`}`}>{name}</Link>
    ),
  },
  {
    title: "委托人",
    dataIndex: "requester",
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
  data?: SideMission[];
}> = ({ loading = false, data }) => (
  <Table<SideMission>
    {...TableCommonProps}
    rowKey="index"
    loading={loading}
    columns={columns}
    dataSource={data}
    pagination={false}
  />
);
