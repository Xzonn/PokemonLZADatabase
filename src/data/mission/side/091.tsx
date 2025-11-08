import { SideMissionInformation } from "@/types";

export const information: SideMissionInformation = {
  index: 91,
  internal: 62,
  name: "抱歉，我用龙属性",
  requester: "古洛莉",
  summary: "深爱龙属性的ＭＳＢＣ成员发来了宝可梦对战的委托。活用属性相克来战斗吧。",
  process: ["在宝可梦对战中打赢委托人。"],
  prize: 5000,
  items: [
    {
      item: "龙之牙",
      number: 1,
    },
    {
      item: "莓榴果",
      number: 5,
    },
  ],
  location: "翡绿３号街区 对战场东侧",
  unlockCondition: "完成“主任务30 争取达到Ｂ级”后",
};
