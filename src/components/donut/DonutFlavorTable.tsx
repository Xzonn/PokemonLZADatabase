import { Table, TableColumnsType } from "antd";

import { IDountFlavor } from "@/types";
import { TableCommonProps } from "@/utils";

const columns: TableColumnsType<IDountFlavor> = [
  {
    title: "风味力量",
    dataIndex: "name",
  },
  {
    title: "对应风味",
    dataIndex: "flavor",
    filters: "甜辣酸苦鲜".split("").map((flavor) => ({ text: flavor, value: flavor })),
    onFilter: (value, record) => record.flavor === value,
    filterMultiple: false,
  },
  {
    title: "效果说明",
    dataIndex: "effect",
  },
];

interface IItemTableProps {
  data?: IDountFlavor[];
}

export const DonutFlavorTable = ({ data }: IItemTableProps) => (
  <Table<IDountFlavor>
    {...TableCommonProps}
    rowKey={(row) => row.name}
    columns={columns}
    dataSource={data}
    pagination={false}
  />
);
