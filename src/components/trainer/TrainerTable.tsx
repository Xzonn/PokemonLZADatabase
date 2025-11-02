import { Table, TableColumnsType } from "antd";
import { useMemo } from "react";

import { TrainerPokemonComponent } from "./TrainerPokemonComponent";
import { TrainerPokemonTable } from "./TrainerPokemonTable";
import { ItemIcon } from "../item";

import { ItemDataByName } from "@/data";
import { TrainerBase, TrainerNormal, TrainerRoyale } from "@/types";
import { Icon, Link, PaginationConfig, TRNAME_WITH_ICONS, TRTYPE_WITH_ICONS, TableCommonProps } from "@/utils";

const getCommonColumns = (data: TrainerBase[] | undefined): TableColumnsType<TrainerNormal | TrainerRoyale> => {
  const trtypes = Array.from(new Set(data?.map((item) => item.trtype) || []));
  const trnames = Array.from(new Set(data?.map((item) => item.trname) || []));

  return [
    {
      title: "训练家类型",
      dataIndex: "trtype",
      width: 200,
      filters: trtypes.map((type) => ({
        text: type,
        value: type,
      })),
      onFilter: (value, record) => record.trtype === value,
      filterSearch: true,
      render: (trtype) => (
        <span className="icon-wrapper">
          {TRTYPE_WITH_ICONS.includes(trtype) && (
            <Icon
              name={trtype}
              size={22}
            />
          )}
          <span>{trtype}</span>
        </span>
      ),
    },
    {
      title: "名字",
      dataIndex: "trname",
      width: 250,
      render: (trname, row) => (
        <div>
          {TRNAME_WITH_ICONS.includes(trname) ? (
            <span className="icon-wrapper">
              <Icon
                name={trname}
                size={22}
              />
              <Link to={`/tr/${trname}`}>{trname}</Link>
            </span>
          ) : trname === "塔霓/盖伊" ? (
            <span className="icon-wrapper">
              <Icon
                name="塔霓"
                size={22}
              />
              <Icon
                name="盖伊"
                size={22}
              />
              <div>
                <Link to="/tr/塔霓">塔霓</Link>/<Link to="/tr/盖伊">盖伊</Link>
              </div>
            </span>
          ) : (
            <span>{trname}</span>
          )}
          <div className="flex flex-row mt-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <ItemIcon
                key={i}
                item={ItemDataByName[row.pokemon[i]?.ball || "无"]}
              />
            ))}
          </div>
        </div>
      ),
      filters: trnames.map((name) => ({
        text: name,
        value: name,
      })),
      onFilter: (value, record) => record.trname === value,
      filterSearch: true,
    },
    {
      title: "宝可梦",
      dataIndex: "pokemon",
      width: 500,
      render: (pokemon: []) => (
        <div className="flex text-center gap-4 flex-wrap">
          {pokemon.map((p, i) => (
            <TrainerPokemonComponent
              key={i}
              pokemon={p}
            />
          ))}
        </div>
      ),
    },
  ];
};

const getNormalColumns = (data: TrainerNormal[] | undefined): TableColumnsType<TrainerNormal> => {
  const commonColumns = getCommonColumns(data) as TableColumnsType<TrainerNormal>;

  return [
    ...commonColumns.slice(0, 2),
    {
      title: "奖金",
      dataIndex: "prize",
      width: 100,
      render: (prize: number) => `$${prize.toLocaleString("zh-CN")}`,
    },
    commonColumns[2],
  ];
};

const RANKS = Array.from("ZYXWVUGFEDCB∞");

const getRoyaleColumns = (data: TrainerRoyale[] | undefined): TableColumnsType<TrainerRoyale> => {
  const commonColumns = getCommonColumns(data) as TableColumnsType<TrainerRoyale>;

  return [
    {
      title: "等级",
      dataIndex: "rank",
      width: 80,
      filters: RANKS.map((type) => ({
        text: type,
        value: type,
      })),
      onFilter: (value: any, record: any) => (record as TrainerRoyale).rank === value,
      defaultSortOrder: "ascend",
      sorter: (a, b) => RANKS.indexOf(a.rank) - RANKS.indexOf(b.rank),
    },
    ...commonColumns,
  ];
};

interface ITrainerTableProps<T = TrainerBase> {
  isRoyale?: boolean;
  loading?: boolean;
  data?: T[];
}

export const NormalTrainerTable: React.FC<ITrainerTableProps<TrainerNormal>> = ({ loading = false, data }) => {
  const columns = useMemo(() => getNormalColumns(data), [data]);

  return (
    <Table<TrainerNormal>
      {...TableCommonProps}
      expandable={{
        expandedRowRender: (record) => <TrainerPokemonTable pokemon={record.pokemon} />,
      }}
      rowKey="id"
      loading={loading}
      columns={columns}
      dataSource={data}
      pagination={PaginationConfig}
    />
  );
};

export const RoyaleTrainerTable: React.FC<ITrainerTableProps<TrainerRoyale>> = ({ loading = false, data }) => {
  const columns = useMemo(() => getRoyaleColumns(data), [data]);

  return (
    <Table<TrainerRoyale>
      {...TableCommonProps}
      expandable={{
        expandedRowRender: (record) => <TrainerPokemonTable pokemon={record.pokemon} />,
      }}
      rowKey="id"
      loading={loading}
      columns={columns}
      dataSource={data}
      pagination={PaginationConfig}
    />
  );
};
