import { SideMissionInformation } from "@/types";

export const information: SideMissionInformation = {
  index: 89,
  name: "飞吧！追吧！电飞鼠！",
  requester: "达卫",
  summary: "出现了令人头疼的野生电飞鼠，它会偷走人类带的东西。用洛托姆滑翔追上它，拿回委托人的树果吧。",
  process: ["追上飞走的电飞鼠。"],
  prize: 2000,
  items: [
    {
      item: "藻根果",
      number: 8,
    },
    {
      item: "榴石果",
      number: 8,
    },
    {
      item: "茄番果",
      number: 8,
    },
  ],
  location: "琼黄７号街区 建物屋上",
  unlockCondition: null,
};
