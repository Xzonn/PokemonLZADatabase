import { Table, TableColumnType } from "antd";
import { Link } from "react-router-dom";

import { ItemCell } from "../item/ItemCell";

import { ItemDataByName } from "@/data";
import { SideMission } from "@/types";
import { TableCommonProps } from "@/utils";

const getColumns = (setActive: (index: number | null) => void): TableColumnType<SideMission>[] => [
  {
    title: "编号",
    dataIndex: "index",
  },
  {
    title: "名字",
    dataIndex: "name",
    render: (name, row) => (
      <Link
        onClick={() => setActive(row.index)}
        to={""}
      >
        {name}
      </Link>
    ),
  },
  {
    title: "委托人",
    dataIndex: "requester",
  },
  {
    title: "奖金",
    dataIndex: "prize",
    render: (value: number) => `$${value}`,
  },
  {
    title: "道具",
    dataIndex: "items",
    render: (items: { item: string; number: number }[]) => (
      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <div
            key={item.item}
            className="flex items-center gap-2"
          >
            <ItemCell item={ItemDataByName[item.item]} />
            <div>×{item.number}</div>
          </div>
        ))}
      </div>
    ),
  },
];

export const SideMissionTable: React.FC<{
  loading?: boolean;
  data?: SideMission[];
  setActive: (index: number | null) => void;
}> = ({ loading = false, data, setActive }) => (
  <Table<SideMission>
    {...TableCommonProps}
    rowKey="index"
    loading={loading}
    columns={getColumns(setActive)}
    dataSource={data}
    pagination={false}
  />
);
