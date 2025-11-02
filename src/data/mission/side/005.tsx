import { SideMissionInformation } from "@/types";

export const information: SideMissionInformation = {
  index: 5,
  name: "阿柏蛇的尾巴是什么手感？",
  requester: "艾好",
  summary: "女孩想知道蛇宝可梦阿柏蛇的尾巴是什么手感。把捉到的阿柏蛇给她看，让她摸摸尾巴吧。",
  process: ["把阿柏蛇加入同行队伍，给委托人看。"],
  prize: 500,
  items: [
    {
      item: "桃桃果",
      number: 3,
    },
    {
      item: "樱子果",
      number: 3,
    },
    {
      item: "劲爽汽水",
      number: 1,
    },
  ],
  location: "蓉粉１号街区",
  unlockCondition: null,
};
