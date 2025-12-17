import { Table, TableColumnsType } from "antd";

import { ItemDataByName } from "@/data";
import { IDonutButter } from "@/types";
import { TableCommonProps } from "@/utils";

import { ItemCell } from "../item";

const columns: TableColumnsType<IDonutButter> = [
  {
    title: "黄油",
    dataIndex: "name",
    render: (_, row: IDonutButter) => <ItemCell item={ItemDataByName[row.name]} />,
  },
  {
    title: "树果数量",
    dataIndex: "count",
  },
];

interface IItemTableProps {
  data?: IDonutButter[];
}

export const DonutButterTable = ({ data }: IItemTableProps) => (
  <Table<IDonutButter>
    {...TableCommonProps}
    rowKey={(row) => row.name}
    columns={columns}
    dataSource={data}
    pagination={false}
  />
);
