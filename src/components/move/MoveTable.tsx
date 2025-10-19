import { useMemo } from "react";
import { Move } from "../../types";
import { Table, TableColumnsType, TablePaginationConfig } from "antd";
import Link from "../Link";
import { MoveCategoryFilters, PokemonTypeFilters, renderCategory, renderType, TableCommonProps } from "../../utils";

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
    render: (type) => renderType(type),
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

const paginationConfig: TablePaginationConfig = {
  pageSize: 100,
  showSizeChanger: true,
  pageSizeOptions: ["100", "200", "500", "1000"],
};

interface IMoveTableProps<T = undefined> {
  loading?: boolean;
  data?: (Move & T)[];
  extraColumns?: TableColumnsType<Move & T>;
}

const MoveTable = <T,>({ loading = false, data, extraColumns }: IMoveTableProps<T>) => {
  const fullColumns = useMemo(() => [...(extraColumns || []), ...columns], [extraColumns]);

  return (
    <Table
      {...(TableCommonProps as any)}
      loading={loading}
      columns={fullColumns}
      dataSource={data}
      pagination={paginationConfig}
    />
  );
};

export default MoveTable;
