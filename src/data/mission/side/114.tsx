import { SideMissionInformation } from "@/types";

export const information: SideMissionInformation = {
  index: 114,
  name: "盔甲鸟的羽毛",
  requester: "且凯",
  summary: "制作菜刀似乎需要盔甲鸟的羽毛当材料。在１７号野生特区或许能捡到。",
  process: ["在１７号野生特区寻找盔甲鸟掉落的羽毛。"],
  prize: 3500,
  items: [
    {
      item: "金属膜",
      number: 1,
    },
    {
      item: "霹霹果",
      number: 3,
    },
  ],
  location: "翡绿６号街区 １７号野生特区前的步行桥上",
  unlockCondition: "１７号野生特区落成后",
};
