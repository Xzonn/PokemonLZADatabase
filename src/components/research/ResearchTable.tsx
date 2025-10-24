import { Table, TableColumnType } from "antd";

import { Research } from "@/types";
import { TableCommonProps } from "@/utils";

const columns: TableColumnType<Research>[] = [
  {
    title: "调查",
    dataIndex: "name",
  },
  {
    title: "描述",
    dataIndex: "description",
    className: "align-top",
    onCell: (record: Research) => ({
      rowSpan: record.rowSpan,
    }),
  },
  {
    title: "数量",
    dataIndex: "count",
  },
  {
    title: "点数",
    dataIndex: "point",
  },
];

export const ResearchTable: React.FC<{ loading?: boolean; data?: Research[] }> = ({ loading = false, data }) => (
  <Table<Research>
    {...TableCommonProps}
    rowKey="index"
    loading={loading}
    columns={columns}
    dataSource={data}
    pagination={false}
  />
);
