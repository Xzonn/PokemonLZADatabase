import { SideMissionInformation } from "@/types";

export const information: SideMissionInformation = {
  index: 61,
  name: "我看中的全息传送梯",
  requester: "手下",
  summary: "锈蚀组的手下看中的地方偏偏是全息传送梯。打赢对战并让他让开吧。",
  process: ["在宝可梦对战中打赢委托人。"],
  prize: 2000,
  items: [
    {
      item: "毒针",
      number: 1,
    },
    {
      item: "超级碎片",
      number: 20,
    },
  ],
  location: "浦蓝３号街区",
  unlockCondition: "完成“主任务20 锈蚀组的要求”后",
};
