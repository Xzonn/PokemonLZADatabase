import { SideMissionInformation } from "@/types";

export const information: SideMissionInformation = {
  index: 22,
  name: "茉蜜姬的请求",
  requester: "茉蜜姬",
  summary: "接到了茉蜜姬的电话，她想在宝可梦研究所见面。到底是什么事呢……？",
  process: ["去宝可梦研究所问茉蜜姬有什么事。", "从３只宝可梦中选１只收下。"],
  prize: 1000,
  items: [
    {
      item: "经验糖果ＸＳ",
      number: 3,
    },
    {
      item: "经验糖果Ｓ",
      number: 2,
    },
  ],
  location: "宝可梦研究所",
  unlockCondition: "在“主任务08 争取达到Ｖ级”中击败玳萝后",
};
