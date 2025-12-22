import { Table, TableColumnsType } from "antd";

import { ItemDataByName } from "@/data";
import { IDonutBerry } from "@/types";
import { TableCommonProps } from "@/utils";

import { ItemCell } from "../item";

const columns: TableColumnsType<IDonutBerry> = [
  {
    title: "编号",
    dataIndex: "index",
    sorter: (a, b) => a.index - b.index,
  },
  {
    title: "树果",
    dataIndex: "name",
    render: (_, row: IDonutBerry) => <ItemCell item={ItemDataByName[row.name]} />,
  },
  {
    title: "甜",
    dataIndex: "sweet",
    sorter: (a, b) => a.sweet - b.sweet,
  },
  {
    title: "辣",
    dataIndex: "spicy",
    sorter: (a, b) => a.spicy - b.spicy,
  },
  {
    title: "酸",
    dataIndex: "sour",
    sorter: (a, b) => a.sour - b.sour,
  },
  {
    title: "苦",
    dataIndex: "bitter",
    sorter: (a, b) => a.bitter - b.bitter,
  },
  {
    title: "鲜",
    dataIndex: "fresh",
    sorter: (a, b) => a.fresh - b.fresh,
  },
  {
    title: "增幅等级",
    dataIndex: "level",
    render: (level: number) => `+${level}`,
    sorter: (a, b) => a.level - b.level,
  },
  {
    title: "饱腹能量",
    dataIndex: "calories",
    sorter: (a, b) => a.calories - b.calories,
  },
];

interface IItemTableProps {
  loading?: boolean;
  data?: IDonutBerry[];
}

export const DonutBerryTable = ({ loading = false, data }: IItemTableProps) => (
  <Table<IDonutBerry>
    {...TableCommonProps}
    rowKey={(row) => row.index}
    loading={loading}
    columns={columns}
    dataSource={data}
    pagination={false}
  />
);
