import { ItemDataById } from "../items";
import raw from "./detail.txt?raw";

import { ItemDetail, ItemFull } from "@/types";

const lines = raw.trim().split("\n");
const header = lines[0].split("\t");

export const ItemDetailData = lines.slice(1).map((line) => {
  const parts = line.split("\t");
  const dict = Object.fromEntries(parts.map((part, i) => [header[i], part]));
  const itemDetail: ItemDetail = {
    id: parseInt(dict["编号"], 10),
    name: dict["中文名"],
    japanese: dict["日文名"],
    english: dict["英文名"],
    description: dict["描述"],
    price: parseInt(dict["价格"] || "0", 10),
    priceMegaShard: parseInt(dict["超级碎片"] || "0", 10),
    priceColorfulScrew: parseInt(dict["彩色螺丝"] || "0", 10),
    pocket: parseInt(dict["口袋"], 10),
    sortIndex: parseInt(dict["排序编号"], 10),
  };
  const item = ItemDataById[itemDetail.id];
  return {
    ...item,
    ...itemDetail,
  } as ItemFull;
});

export const ItemDetailDataById: Record<number, ItemDetail> = Object.fromEntries(
  ItemDetailData.map((item) => [item.id, item]),
);
