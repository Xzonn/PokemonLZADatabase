import { Table, TableColumnsType, TablePaginationConfig } from "antd";
import { useMemo } from "react";

import { ItemCell } from "./ItemCell";
import { ItemIcon } from "./ItemIcon";

import { ItemDataByName } from "@/data";
import { ItemFull } from "@/types";
import { PaginationConfig, TableCommonProps } from "@/utils";

const COLORFUL_SCREW = ItemDataByName["彩色螺丝"];
const MEGA_SHARD = ItemDataByName["超级碎片"];

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
    title: "口袋",
    dataIndex: "pocket",
  },
  {
    title: "买入价格",
    dataIndex: "price",
    sorter: (a, b) => a.price - b.price,
    render: (price) => (price > 0 ? `$${price}` : "—"),
  },
  {
    key: "sellPrice",
    title: "卖出价格",
    dataIndex: "price",
    sorter: (a, b) => a.price - b.price,
    render: (price) => (price > 0 ? `$${price / 2}` : "—"),
  },
  {
    title: "彩色螺丝数量",
    dataIndex: "priceColorfulScrew",
    sorter: (a, b) => a.priceColorfulScrew - b.priceColorfulScrew,
    render: (price) =>
      price > 0 ? (
        <div className="cell-item">
          <ItemIcon item={COLORFUL_SCREW} />
          <div className="item-name">{price}</div>
        </div>
      ) : (
        "—"
      ),
  },
  {
    title: "超级碎片数量",
    dataIndex: "priceMegaShard",
    sorter: (a, b) => a.priceMegaShard - b.priceMegaShard,
    render: (price) =>
      price > 0 ? (
        <div className="cell-item">
          <ItemIcon item={MEGA_SHARD} />
          <div className="item-name">{price}</div>
        </div>
      ) : (
        "—"
      ),
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
  headers?: string[];
  pagination?: false | TablePaginationConfig;
}

export const ItemTable = <T,>({
  loading = false,
  data,
  extraColumns = [],
  headers = ["编号", "道具", "买入价格", "卖出价格", "说明"],
  pagination,
}: IItemTableProps<T>) => {
  const sortedColumns = useMemo(() => {
    type ColumnType = TableColumnsType<ItemFull & T>[number];
    const columnsByTitle = new Map<string, ColumnType>(
      [...columns, ...extraColumns].map((col) => [col.title, col] as [string, ColumnType]),
    );
    return headers?.map((header) => columnsByTitle.get(header)).filter(Boolean) as TableColumnsType<ItemFull & T>;
  }, [headers, extraColumns]);

  return (
    <Table<ItemFull & T>
      {...TableCommonProps}
      rowKey={(row) => row.id}
      loading={loading}
      columns={sortedColumns}
      dataSource={data}
      pagination={pagination ?? (loading || (data?.length || 0) > 100 ? PaginationConfig : false)}
    />
  );
};
