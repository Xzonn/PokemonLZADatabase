import { Table, TableColumnsType } from "antd";

import { ItemDataByName, PokemonDataByName } from "@/data";
import { IDonutButter } from "@/types";
import { TableCommonProps } from "@/utils";

import { ItemCell } from "../item";
import { MissionLink } from "../mission";
import { PokemonIconWithName } from "../pokemon";

const columns: TableColumnsType<IDonutButter> = [
  {
    title: "黄油",
    dataIndex: "name",
    render: (_, row: IDonutButter) => <ItemCell item={ItemDataByName[row.name]} />,
  },
  {
    title: "树果数量",
    dataIndex: "count",
  },
  {
    title: "任务",
    key: "mission",
    render: (_, row: IDonutButter) => (
      <MissionLink
        category={row.missionCategory}
        index={row.missionIndex}
      />
    ),
  },
  {
    title: "对应宝可梦",
    dataIndex: "pokemon",
    render: (value: string) =>
      value ? (
        <PokemonIconWithName
          pokemon={PokemonDataByName[value]}
          link
        />
      ) : (
        "—"
      ),
  },
];

interface IItemTableProps {
  data?: IDonutButter[];
}

export const DonutButterTable = ({ data }: IItemTableProps) => (
  <Table<IDonutButter>
    {...TableCommonProps}
    rowKey={(row) => row.name}
    columns={columns}
    dataSource={data}
    pagination={false}
  />
);
