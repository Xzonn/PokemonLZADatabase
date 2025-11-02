import { SideMissionInformation } from "@/types";

export const information: SideMissionInformation = {
  index: 60,
  name: "对战全餐・二星",
  requester: "餐厅",
  summary: "请尽情享用贰流餐馆的宝可梦对战全餐吧。中途回复是不符合用餐礼仪的。",
  process: ["在贰流餐馆称霸宝可梦对战全餐。"],
  prize: 1000,
  items: [
    {
      item: "招式学习器０９４",
      number: 1,
    },
    {
      item: "特攻增强剂",
      number: 3,
    },
    {
      item: "特防增强剂",
      number: 3,
    },
  ],
  location: "秋日大道 贰流餐馆",
  unlockCondition: null,
};
