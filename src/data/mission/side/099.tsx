import { SideMissionInformation } from "@/types";

export const information: SideMissionInformation = {
  index: 99,
  name: "调出可可多拉喜欢的味道",
  requester: "薇蔻",
  summary: "天天都是同样的铁屑，可可多拉们开始吃腻了。有没有什么刺激的调味料能增进它们的食欲呢？",
  process: ["用宝可梦的招式污泥炸弹击中铁屑。"],
  prize: 3500,
  items: [
    {
      item: "特防增强剂",
      number: 5,
    },
    {
      item: "力量束带",
      number: 1,
    },
  ],
  location: "南侧大道 宝可梦研究所附近",
  unlockCondition: null,
};
