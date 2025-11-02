import { SideMissionInformation } from "@/types";

export const information: SideMissionInformation = {
  index: 108,
  name: "阿罗拉地区的雷丘",
  requester: "可莉萍",
  summary: "阿罗拉地区的雷丘似乎和其他地区样子不同。用自己的雷丘和委托人的阿罗拉地区的雷丘交换吧。",
  process: ["只用１只雷丘在对战中打赢委托人。", "用自己的雷丘和委托人的雷丘交换。"],
  prize: 500,
  items: [
    {
      item: "茄番果",
      number: 10,
    },
    {
      item: "榴石果",
      number: 10,
    },
  ],
  location: "榴红区阔星公司 建物前",
  unlockCondition: null,
};
