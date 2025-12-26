import { Table, TableColumnsType } from "antd";
import { FC, ReactNode } from "react";

import { ItemDetail, Pokemon } from "@/types";
import { Icon, Link, TableCommonProps, getPokemonFullId } from "@/utils";

import { ItemCell } from "./ItemCell";
import { MissionLink } from "../mission";
import { PokemonCell } from "../pokemon/PokemonCell";

interface MegaEvolutionFull {
  normal: Pokemon;
  mega: Pokemon;
  stone: ItemDetail;
  obtain: string;
  missionIndex: number | null;
}

const renderObtain = (row: MegaEvolutionFull): ReactNode => {
  const { obtain, stone, missionIndex } = row;
  return obtain.split("|").map((line, index) => {
    if (line === "主任务") {
      return (
        <MissionLink
          key={index}
          category="主"
          index={missionIndex!}
        />
      );
    } else if (line === "异次元任务") {
      return (
        <MissionLink
          key={index}
          category="异"
          index={missionIndex!}
        />
      );
    } else if (line === "副任务") {
      return (
        <MissionLink
          key={index}
          category="副"
          index={missionIndex!}
        />
      );
    } else if (line === "阔星公司") {
      return (
        <div key={index}>
          <Link to="/i/超级碎片#作用">阔星公司</Link>兑换
          {missionIndex !== null ? (
            <>
              （完成
              <MissionLink
                key={index}
                category="主"
                index={missionIndex!}
                showTitle={false}
              />{" "}
              后）
            </>
          ) : null}
          ，
          <div className="icon-wrapper-inline">
            <Icon name="mega-shard" />
            {stone.priceMegaShard}
          </div>
        </div>
      );
    } else if (line.includes("石头馆")) {
      return (
        <div key={index}>
          {line}，${stone.price.toLocaleString("zh-CN")}
        </div>
      );
    } else if (line.includes("ＺＡ登峰战")) {
      return (
        <Link
          className="block"
          key={index}
          to="/ＺＡ登峰战"
        >
          {line}
        </Link>
      );
    } else if (line.includes("赛季奖励")) {
      return (
        <Link
          className="block"
          key={index}
          to="/联网活动#赛季奖励"
        >
          {line}
        </Link>
      );
    } else if (/特典|神秘礼物/.test(line)) {
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
    render: (row) => <div className="min-w-36">{renderObtain(row)}</div>,
    minWidth: 160,
  },
  {
    title: "说明",
    key: "description",
    render: (row: MegaEvolutionFull) => <div className="min-w-48">{row.stone.description}</div>,
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
