import { Table, TableColumnsType, TablePaginationConfig } from "antd";
import { useMemo } from "react";

import { ItemCell } from "./ItemCell";

import { ItemFull } from "@/types";
import { PaginationConfig, TableCommonProps } from "@/utils";

const columns: TableColumnsType<ItemFull> = [
  {
    title: "编号",
    dataIndex: "id",
    sorter: (a, b) => a.id - b.id,
  },
  {
    title: "道具",
    dataIndex: "name",
    render: (_, row) => <ItemCell item={row} />,
  },
  {
    title: "买入价格",
    dataIndex: "price",
    sorter: (a, b) => a.price - b.price,
    render: (price) => (price > 0 ? `$${price}` : "—"),
  },
  {
    title: "说明",
    dataIndex: "description",
    render: (description) => <div style={{ minWidth: 200 }}>{description}</div>,
    minWidth: 200,
  },
];

interface IItemTableProps<T = undefined> {
  loading?: boolean;
  data?: (ItemFull & T)[];
  extraColumns?: TableColumnsType<ItemFull & T>;
  pagination?: false | TablePaginationConfig;
}

export const ItemTable = <T,>({ loading = false, data, extraColumns, pagination }: IItemTableProps<T>) => {
  const fullColumns = useMemo(() => [...(extraColumns || []), ...columns], [extraColumns]) as TableColumnsType<
    ItemFull & T
  >;

  return (
    <Table<ItemFull & T>
      {...TableCommonProps}
      rowKey={(row) => row.id}
      loading={loading}
      columns={fullColumns}
      dataSource={data}
      pagination={pagination ?? (loading || (data?.length || 0) > 100 ? PaginationConfig : false)}
    />
  );
};
