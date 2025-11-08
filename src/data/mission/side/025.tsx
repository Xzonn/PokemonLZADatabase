import { SideMissionInformation } from "@/types";

export const information: SideMissionInformation = {
  index: 25,
  internal: 26,
  name: "咖啡馆的顾客是破破袋",
  requester: "枫薇",
  summary: "野生的破破袋们聚集在友友乐咖啡馆。这样下去没办法做生意了！把它们带到别的地方去吧。",
  process: ["跟委托人说话，收下美味垃圾。", "把破破袋们引到垃圾场去。"],
  prize: 1200,
  items: [
    {
      item: "神奇糖果",
      number: 2,
    },
    {
      item: "黑暗球",
      number: 5,
    },
  ],
  location: "蓉粉４号街区 友友乐咖啡馆前",
  unlockCondition: null,
};
