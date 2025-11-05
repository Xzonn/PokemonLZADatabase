import { Table, TableColumnsType } from "antd";
import React, { FC, ReactNode } from "react";

import { ItemIconWithoutTooltip } from "@/components";
import { ItemDataById, MoveDataById, PokemonDataById } from "@/data";
import { EPokemonType, Evolution, Item } from "@/types";
import { EvolutionItemMap, Link, TableCommonProps, TypeIcon } from "@/utils";

import { PokemonCell } from "./PokemonCell";

interface IEvolutionItemProps {
  prefix?: string;
  suffix?: string;
  item: Item;
}
const EvolutionItem: FC<IEvolutionItemProps> = ({ prefix, suffix, item }) => (
  <>
    {prefix}
    <ItemIconWithoutTooltip
      item={item}
      className="icon-inline"
    />
    <Link to={`/i/${item?.name}`}>{item?.name}</Link>
    {suffix}
  </>
);

const getEvolutionCondition = (evolution: Evolution): ReactNode => {
  switch (evolution.method) {
    case 0:
      return "无";
    case 1:
      return "友好度 158 以上、等级提升";
    case 2:
      return "友好度 158 以上、白天、等级提升";
    case 3:
      return "友好度 158 以上、晚上、等级提升";
    case 4:
      return "等级提升";
    case 5:
      return "连接交换";
    case 6:
      return (
        <EvolutionItem
          item={ItemDataById[evolution.argument]}
          prefix="使用道具"
          suffix="、连接交换"
        />
      );
    case 7:
      return "盖盖虫与小嘴蜗连接交换";
    case 8:
      return (
        <EvolutionItem
          item={ItemDataById[EvolutionItemMap.get(evolution.argument) || 0]}
          prefix="使用道具"
        />
      );
    case 9:
      return "等级提升、攻击较高";
    case 10:
      return "等级提升、攻击=防御";
    case 11:
      return "等级提升、防御较高";
    case 12:
      return "加密常数尾数 < 5、等级提升";
    case 13:
      return "加密常数尾数 > 5、等级提升";
    case 14:
      return "等级提升";
    case 15:
      return "等级提升、有精灵球、有空位";
    case 16:
      return "美丽度 170 以上";
    case 17:
      return (
        <EvolutionItem
          item={ItemDataById[EvolutionItemMap.get(evolution.argument) || 0]}
          prefix="使用道具"
          suffix="、雄性"
        />
      );
    case 18:
      return (
        <EvolutionItem
          item={ItemDataById[EvolutionItemMap.get(evolution.argument) || 0]}
          prefix="使用道具"
          suffix="、雌性"
        />
      );
    case 19:
      return (
        <EvolutionItem
          item={ItemDataById[EvolutionItemMap.get(evolution.argument) || 0]}
          prefix="携带道具"
          suffix="、白天、等级提升"
        />
      );
    case 20:
      return (
        <EvolutionItem
          item={ItemDataById[EvolutionItemMap.get(evolution.argument) || 0]}
          prefix="携带道具"
          suffix="、晚上、等级提升"
        />
      );
    case 21:
      return `学会招式${MoveDataById[evolution.argument]?.name}`;
    case 22:
      return `队伍中有${PokemonDataById[`${evolution.argument}-0`]}、等级提升`;
    case 23:
      return "雄性、等级提升";
    case 24:
      return "雌性、等级提升";
    case 25:
      return "磁场附近、等级提升";
    case 26:
      return "森林附近、等级提升";
    case 27:
      return "雪山附近、等级提升";
    case 28:
      return "倒置主机、在宝可梦列表中选择“进化”";
    case 29:
      return (
        <>
          友好度 158 以上、习得
          <TypeIcon
            type={EPokemonType[evolution.argument]}
            className="icon-inline"
          />
          属性招式、等级提升
        </>
      );
    case 30:
      return `习得${EPokemonType[evolution.argument]}属性招式、等级提升`;
    case 31:
      return "下雨天气、等级提升";
    case 32:
      return "白天、等级提升";
    case 33:
      return "夜晚、等级提升";
    case 34:
      return "雌性、等级提升";
    case 35:
      return "";
    case 36:
      return `在《${evolution.argument}》中、等级提升`;
    case 37:
      return `在《${evolution.argument}》中、白天、等级提升`;
    case 38:
      return `在《${evolution.argument}》中、夜晚、等级提升`;
    case 39:
      return "在拉纳基拉山附近、等级提升";
    case 40:
      return "黄昏、等级提升";
    case 41:
      return "在究极之洞中、等级提升";
    case 42:
      return "在究极之洞中、使用道具";
    case 43:
      return `对战中击中要害${evolution.argument}次或以上、结束对战`;
    case 44:
      return `受到至少${evolution.argument}伤害后、来到沙尘洼地岩门附近`;
    case 45:
      return "携带糖饰、主角原地旋转";
    case 46:
      return "性格高调、等级提升";
    case 47:
      return "性格低调、等级提升";
    case 48:
      return "查看恶之挂轴";
    case 49:
      return "查看水之挂轴";
    case 50:
      return `Let's Go模式达到${evolution.argument}步、在Let's Go状态下`;
    case 51:
      return "在联盟集友圈中";
    case 52:
      return "等级提升、加密常数尾数 = 00、自动进化";
    case 53:
      return "等级提升、加密常数尾数 ≠ 00、自动进化";
    case 54:
      return `收集索财灵的硬币达到${evolution.argument}个、等级提升`;
    case 55:
      return `击败${evolution.argument}只携带头领凭证的劈斩司令`;
    case 56:
      return `使用愤怒之拳达到${evolution.argument}次`;
    case 57:
      return `习得招式${evolution.argument}、加密常数尾数 = 00、等级提升`;
    case 58:
      return `习得招式${evolution.argument}、加密常数尾数 ≠ 00、等级提升`;
    case 59:
      return `承受反作用力伤害${evolution.argument}以上、雄性`;
    case 60:
      return `承受反作用力伤害${evolution.argument}以上、雌性`;
    case 61:
      return "洗翠地区";
    case 90:
      return `满月、使用道具${evolution.argument}`;
    case 91:
      return "以迅疾使出20次屏障猛攻";
    case 92:
      return "以刚猛使出20次毒千针";

    default:
      return `${evolution.method}：${evolution.argument}`;
  }
};

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
