import { Popover, Table, TableColumnsType, TablePaginationConfig } from "antd";
import { useMemo } from "react";

import { TypeEffects } from "../type/TypeEffects";

import { Move } from "@/types";
import {
  Link,
  MoveCategoryFilters,
  PaginationConfig,
  PokemonTypeFilters,
  TableCommonProps,
  TypeIcon,
  renderCategory,
} from "@/utils";

const columns: TableColumnsType<Move> = [
  {
    title: "招式",
    dataIndex: "name",
    render: (_, record) => (
      <Link
        to={`/m/${record.name}`}
        className="text-blue-600"
      >
        {record.name}
      </Link>
    ),
  },
  {
    title: "属性",
    dataIndex: "type",
    render: (type) => (
      <Popover
        title="属性相克"
        content={
          <TypeEffects
            types={[type]}
            isAttack
          />
        }
      >
        <>
          <TypeIcon type={type} />
        </>
      </Popover>
    ),
    filters: PokemonTypeFilters,
    onFilter: (value, record) => record.type === value,
  },
  {
    title: "分类",
    dataIndex: "category",
    render: (category) => renderCategory(category),
    filters: MoveCategoryFilters,
    onFilter: (value, record) => record.category === value,
  },
  {
    title: "威力",
    dataIndex: "power",
    render: (power, row) => (row.category === "变化" || power === 0 ? "—" : power),
    sorter: (a, b) => a.power - b.power,
  },
  {
    title: "等待时间",
    dataIndex: "wait",
    sorter: (a, b) => a.wait - b.wait,
  },
  {
    title: "说明",
    dataIndex: "description",
    render: (description) => <div style={{ minWidth: 200 }}>{description}</div>,
    minWidth: 200,
  },
];

interface IMoveTableProps<T = undefined> {
  loading?: boolean;
  data?: (Move & T)[];
  extraColumns?: TableColumnsType<Move & T>;
  pagination?: false | TablePaginationConfig;
}

export const MoveTable = <T,>({ loading = false, data, extraColumns, pagination }: IMoveTableProps<T>) => {
  const fullColumns = useMemo(() => [...(extraColumns || []), ...columns], [extraColumns]) as TableColumnsType<
    Move & T
  >;

  return (
    <Table<Move & T>
      {...TableCommonProps}
      rowKey={(row) => row.id}
      loading={loading}
      columns={fullColumns}
      dataSource={data}
      pagination={pagination ?? (loading || (data?.length || 0) > 100 ? PaginationConfig : false)}
    />
  );
};
