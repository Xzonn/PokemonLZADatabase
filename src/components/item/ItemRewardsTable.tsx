import { Table, TableColumnsType, TablePaginationConfig } from "antd";
import { useMemo } from "react";

import { ItemDataByName } from "@/data";
import { IItemReward } from "@/types";
import { PaginationConfig, TableCommonProps } from "@/utils";

import { ItemCell } from "./ItemCell";

const RewardsTableColumns: TableColumnsType<IItemReward> = [
  {
    title: "道具",
    dataIndex: "item",
    render: (item) => <ItemCell item={ItemDataByName[item]} />,
    width: 120,
  },
  {
    title: "数量",
    dataIndex: "quantity",
    width: 40,
  },
  {
    title: "概率",
    dataIndex: "probability",
    render: (probability) => (probability ? `${probability}%` : "—"),
    width: 40,
  },
  {
    title: "条件",
    dataIndex: "condition",
    width: 160,
    render: (condition) => condition || "—",
  },
];

interface IProps {
  loading?: boolean;
  data?: IItemReward[];
  headers?: string[];
  pagination?: false | TablePaginationConfig;
}

export const ItemRewardsTable = ({ loading = false, data, headers = ["道具", "数量", "概率"], pagination }: IProps) => {
  const sortedColumns = useMemo(() => {
    type ColumnType = TableColumnsType<IItemReward>[number];
    const columnsByTitle = new Map<string, ColumnType>(
      RewardsTableColumns.map((col) => [col.title, col] as [string, ColumnType]),
    );
    return headers?.map((header) => columnsByTitle.get(header)).filter(Boolean) as TableColumnsType<IItemReward>;
  }, [headers]);

  return (
    <Table<IItemReward>
      {...TableCommonProps}
      rowKey={(row) => `${row.item}-${row.quantity}`}
      loading={loading}
      columns={sortedColumns}
      dataSource={data}
      pagination={pagination ?? (loading || (data?.length || 0) > 100 ? PaginationConfig : false)}
    />
  );
};
