import { SideMissionInformation } from "@/types";

export const information: SideMissionInformation = {
  index: 35,
  name: "瑜伽大师的指引",
  requester: "明香",
  summary: "据说委托人的玛沙那好像很难集中注意力。找出传说中的瑜伽大师所在的地方，并请求大师指导吧。",
  process: ["以委托人提供的信息为线索，找出瑜伽大师所在的地方。"],
  prize: 2000,
  items: [
    {
      item: "弯曲的汤匙",
      number: 1,
    },
    {
      item: "经验糖果ＸＳ",
      number: 5,
    },
  ],
  location: "琼黄大道",
  unlockCondition: null,
};
