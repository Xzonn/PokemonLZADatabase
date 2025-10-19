import React from "react";
import { Evolution } from "../../types";
import { Table, TableColumnsType } from "antd";
import { getEvolutionCondition, TableCommonProps } from "../../utils";
import { PokemonDataById } from "../../data/pokemon";
import PokemonCell from "./PokemonCell";

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
  data?: Evolution[];
}

const PokemonEvolutionTable: React.FC<IPokemonEvolutionTableProps> = ({ data }) => (
  <Table
    {...(TableCommonProps as any)}
    columns={columns}
    dataSource={data}
    pagination={false}
  />
);
export default PokemonEvolutionTable;
