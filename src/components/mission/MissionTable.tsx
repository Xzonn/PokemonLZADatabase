import { Table, TableColumnType, TableColumnsType } from "antd";
import { FC, useMemo } from "react";

import { MissionSummary } from "@/types";
import { Link, TableCommonProps, getMissionCategory, getMissionIndex } from "@/utils";

import { ItemList } from "../item";
import { PokemonList } from "../pokemon";

const columns: TableColumnType<MissionSummary>[] = [
  {
    title: "编号",
    dataIndex: "index",
    render: (index, row) => `${getMissionCategory(row.category)} ${getMissionIndex(index)}`,
  },
  {
    title: "名字",
    dataIndex: "name",
    render: (name, row) => {
      switch (row.category) {
        case "主":
          return <Link to={`/main/${getMissionIndex(row.index)}`}>{name}</Link>;
        case "副":
          return <Link to={`/side/${getMissionIndex(row.index)}`}>{name}</Link>;
        case "异":
          return <Link to={`/hyperspace/${getMissionIndex(row.index)}`}>{name}</Link>;
      }
    },
  },
  {
    title: "委托人",
    dataIndex: "requester",
    render: (value: string) => value || "—",
  },
  {
    title: "奖金",
    dataIndex: "prize",
    render: (value: number) => (value !== 0 ? `$${value.toLocaleString("zh-CN")}` : "—"),
  },
  {
    title: "道具",
    dataIndex: "items",
    render: (items) => <ItemList items={items} />,
  },
  {
    title: "宝可梦",
    dataIndex: "pokemon",
    render: (pokemon) => <PokemonList pokemon={pokemon} />,
  },
];

interface IProps {
  loading?: boolean;
  data?: MissionSummary[];
  headers?: string[];
}

export const MissionTable: FC<IProps> = ({
  loading = false,
  data,
  headers = ["编号", "名字", "委托人", "奖金", "道具", "宝可梦"],
}) => {
  const sortedColumns = useMemo(() => {
    type ColumnType = TableColumnsType<MissionSummary>[number];
    const columnsByTitle = new Map<string, ColumnType>(columns.map((col) => [col.title, col] as [string, ColumnType]));
    return headers?.map((header) => columnsByTitle.get(header)).filter(Boolean) as TableColumnsType<MissionSummary>;
  }, [headers]);

  return (
    <Table<MissionSummary>
      {...TableCommonProps}
      rowKey="index"
      loading={loading}
      columns={sortedColumns}
      dataSource={data}
      pagination={false}
    />
  );
};
