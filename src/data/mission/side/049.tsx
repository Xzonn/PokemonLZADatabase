import { SideMissionInformation } from "@/types";

export const information: SideMissionInformation = {
  index: 49,
  name: "攻击回复两不误的战术",
  requester: "希曲",
  summary: "有的招式能减少对手的ＨＰ并回复自己的ＨＰ。和委托人对战，窥探这是怎样的一种战术吧。",
  process: ["在宝可梦对战中打赢委托人。"],
  prize: 1500,
  items: [
    {
      item: "大根茎",
      number: 1,
    },
    {
      item: "文柚果",
      number: 10,
    },
  ],
  location: "冬日大道",
  unlockCondition: null,
};
