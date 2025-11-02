import { SideMissionInformation } from "@/types";

export const information: SideMissionInformation = {
  index: 21,
  name: "美术馆的粉蝶蛹",
  requester: "皮亚柏",
  summary: "找出所有藏在美术馆不知何处的粉蝶蛹吧。似乎总数竟然多达１２只。",
  process: ["寻找在美术馆迷路的１２只粉蝶蛹。", "从委托人那里收下粉蝶蛹。"],
  prize: 3000,
  items: [
    {
      item: "博识眼镜",
      number: 1,
    },
    {
      item: "一般宝石",
      number: 3,
    },
  ],
  location: "北侧大道 密阿雷美术馆",
  unlockCondition: null,
};
