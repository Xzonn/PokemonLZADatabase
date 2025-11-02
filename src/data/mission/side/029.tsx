import { SideMissionInformation } from "@/types";

export const information: SideMissionInformation = {
  index: 29,
  name: "对战全餐・一星",
  requester: "餐厅",
  summary: "请尽情享用谱通餐馆的宝可梦对战全餐吧。中途回复是不符合用餐礼仪的。",
  process: ["在谱通餐馆称霸宝可梦对战全餐。"],
  prize: 300,
  items: [
    {
      item: "招式学习器０８５",
      number: 1,
    },
    {
      item: "攻击增强剂",
      number: 2,
    },
    {
      item: "防御增强剂",
      number: 2,
    },
  ],
  location: "翡绿６号街区 谱通餐馆",
  unlockCondition: null,
};
