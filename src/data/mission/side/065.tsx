import { SideMissionInformation } from "@/types";

export const information: SideMissionInformation = {
  index: 65,
  internal: 28,
  name: "某公寓的异常现象",
  requester: "恬娴",
  summary: "某座公寓似乎发生了灵异现象。委托人想让人帮忙确认屋顶传来的诡异声响。",
  process: ["前往据说会发生异常现象的公寓屋顶。", "观察可疑的咚咚鼠。", "追上逃跑的咚咚鼠。"],
  prize: 4000,
  items: [
    {
      item: "磁铁",
      number: 1,
    },
    {
      item: "烛木果",
      number: 5,
    },
  ],
  location: "榴红７号街区 南西端",
  unlockCondition: null,
};
