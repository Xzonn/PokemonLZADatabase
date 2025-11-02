import { SideMissionInformation } from "@/types";

export const information: SideMissionInformation = {
  index: 27,
  name: "从化石里复活的宝可梦",
  requester: "余恒",
  summary: "从化石复原装置的研究员手里收下了钱。帮忙买一个颚之化石或鳍之化石回来吧。",
  process: ["在春日大道的石头馆买下颚之化石或鳍之化石，交给委托人。"],
  prize: 2500,
  items: [
    {
      item: "硬石头",
      number: 1,
    },
    {
      item: "藻根果",
      number: 10,
    },
  ],
  location: "南侧大道 宝可梦研究所 ２楼研究室",
  unlockCondition: null,
};
