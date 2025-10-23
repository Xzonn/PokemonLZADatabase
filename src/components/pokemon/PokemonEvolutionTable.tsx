import { Table, TableColumnsType } from "antd";
import React from "react";

import { PokemonCell } from "./PokemonCell";

import { PokemonDataById } from "@/data";
import { Evolution } from "@/types";
import { TableCommonProps, getEvolutionCondition } from "@/utils";

const columns: TableColumnsType<Evolution> = [
  {
    title: "进化前",
    dataIndex: "name",
    render: (_, row) => <PokemonCell pokemon={PokemonDataById[row.previous]} />,
  },
  {
    title: "进化等级",
    dataIndex: "level",
    render: (level) => (level > 0 ? level : "—"),
  },
  {
    title: "进化方式",
    dataIndex: "method",
    render: (_, row) => getEvolutionCondition(row),
  },
  {
    title: "进化后",
    dataIndex: "name",
    render: (_, row) => <PokemonCell pokemon={PokemonDataById[row.target]} />,
  },
];

interface IPokemonEvolutionTableProps {
  loading?: boolean;
  data?: Evolution[];
}

export const PokemonEvolutionTable: React.FC<IPokemonEvolutionTableProps> = ({ loading, data }) => (
  <Table<Evolution>
    {...TableCommonProps}
    rowKey={(_, index) => index || ""}
    loading={loading}
    columns={columns}
    dataSource={data}
    pagination={false}
  />
);
