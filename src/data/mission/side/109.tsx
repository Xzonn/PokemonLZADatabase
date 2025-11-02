import { SideMissionInformation } from "@/types";

export const information: SideMissionInformation = {
  index: 109,
  name: "擅长回复的宝可梦们",
  requester: "霍莉",
  summary: "说起回复宝可梦，就得提宝可梦中心的姐姐。她似乎在宝可梦对战中也擅长使用回复招式。",
  process: ["在宝可梦对战中打赢委托人。"],
  prize: 4500,
  items: [
    {
      item: "幸运蛋",
      number: 1,
    },
    {
      item: "全复药",
      number: 5,
    },
    {
      item: "活力块",
      number: 2,
    },
  ],
  location: "翡绿８号街区 宝可梦中心：翡绿",
  unlockCondition: null,
};
