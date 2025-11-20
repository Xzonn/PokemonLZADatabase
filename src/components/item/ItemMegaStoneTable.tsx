import { Table, TableColumnsType } from "antd";
import { FC, ReactNode } from "react";

import { ItemDetail, Pokemon } from "@/types";
import { Icon, Link, TableCommonProps, getPokemonFullId } from "@/utils";

import { ItemCell } from "./ItemCell";
import { PokemonCell } from "../pokemon/PokemonCell";

export interface MegaEvolutionFull {
  normal: Pokemon;
  mega: Pokemon;
  stone: ItemDetail;
  obtain: string;
}

const renderObtain = (row: MegaEvolutionFull): ReactNode => {
  const { obtain, stone } = row;
  return obtain.split("|").map((line, index) => {
    if (line.includes("阔星公司")) {
      return (
        <div key={index}>
          {line}，
          <div className="icon-wrapper-inline">
            <Icon name="mega-shard" />
            {stone.priceMegaShard}
          </div>
        </div>
      );
    }
    if (line.includes("石头馆")) {
      return (
        <div key={index}>
          {line}，${stone.price.toLocaleString("zh-CN")}
        </div>
      );
    }
    if (line.includes("ＺＡ登峰战")) {
      return (
        <Link
          className="block"
          key={index}
          to="/ＺＡ登峰战"
        >
          {line}
        </Link>
      );
    }
    if (line.includes("赛季奖励")) {
      return (
        <Link
          className="block"
          key={index}
          to="/联网活动#赛季奖励"
        >
          {line}
        </Link>
      );
    }
    if (/特典|神秘礼物/.test(line)) {
      return (
        <Link
          className="block"
          key={index}
          to="/联网活动#神秘礼物"
        >
          {line}
        </Link>
      );
    }
    return <div key={index}>{line}</div>;
  });
};

const columns: TableColumnsType<MegaEvolutionFull> = [
  {
    title: "编号",
    key: "id",
    render: (row) => row.stone.id,
    sorter: (a, b) => a.stone.id - b.stone.id,
  },
  {
    title: "道具",
    key: "item",
    render: (row) => <ItemCell item={row.stone} />,
  },
  {
    title: "超级进化前",
    key: "normal",
    render: (row) => <PokemonCell pokemon={row.normal} />,
  },
  {
    title: "超级进化后",
    key: "mega",
    render: (row) => <PokemonCell pokemon={row.mega} />,
  },
  {
    title: "获取方式",
    key: "obtain",
    render: renderObtain,
  },
  {
    title: "说明",
    key: "description",
    render: (row: MegaEvolutionFull) => <div style={{ minWidth: 200 }}>{row.stone.description}</div>,
    minWidth: 200,
  },
];

interface IProps {
  loading?: boolean;
  data?: MegaEvolutionFull[];
}

export const ItemMegaStoneTable: FC<IProps> = ({ loading = false, data }) => (
  <Table<MegaEvolutionFull>
    {...TableCommonProps}
    rowKey={(row) => getPokemonFullId(row.mega)}
    loading={loading}
    columns={columns}
    dataSource={data}
    pagination={false}
  />
);
