import { SideMissionInformation } from "@/types";

export const information: SideMissionInformation = {
  index: 8,
  internal: 112,
  name: "为火狐狸提供帮助",
  requester: "淑芝",
  summary: "有只没精神的野生火狐狸，对食物无动于衷，带它去宝可梦中心也不管用。还有什么其他的办法吗……？",
  process: [
    "前往春日大道的时髦咖啡馆拜访中药局的店长。",
    "在５号野生特区寻找活力小树枝。",
    "把活力小树枝喂给火狐狸。",
    "收下火狐狸。",
  ],
  prize: 1200,
  items: [
    {
      item: "经验糖果ＸＳ",
      number: 3,
    },
    {
      item: "经验糖果Ｓ",
      number: 1,
    },
  ],
  location: "蓉粉２号街区 中庭",
  unlockCondition: null,
};
