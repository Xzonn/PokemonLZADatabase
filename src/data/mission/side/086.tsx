import { SideMissionInformation } from "@/types";

export const information: SideMissionInformation = {
  index: 86,
  name: "谁是搞乱庭院的犯人？",
  requester: "手下",
  summary: "锈蚀组事务所的院子里发现了一个大洞。为了洗清莫须有的嫌疑，找出真正的犯人吧。",
  process: ["循着洞找出搞乱事务所院子的犯人。", "回到锈蚀组事务所，与委托人说话。"],
  prize: 2000,
  items: [
    {
      item: "弱点保险",
      number: 1,
    },
    {
      item: "固执薄荷",
      number: 3,
    },
  ],
  location: "浦蓝４号街区 锈蚀组事务所的庭院里",
  unlockCondition: null,
};
