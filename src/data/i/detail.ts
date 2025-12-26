import { ItemDetail, ItemFull } from "@/types";
import { parseTSV } from "@/utils";

import { ItemDataById } from "../items";
import raw from "./detail.txt?raw";

export const ItemFullData = parseTSV<ItemFull>(raw, (dict) => {
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
    obtain: dict["获取方式"] ? dict["获取方式"].split("|") : [],
  };
  const item = ItemDataById[itemDetail.id];
  return {
    ...item,
    ...itemDetail,
  } as ItemFull;
});

export const ItemFullDataById: Record<number, ItemFull> = Object.fromEntries(
  ItemFullData.map((item) => [item.id, item]),
);
export const ItemFullDataByName: Record<string, ItemFull> = Object.fromEntries(
  ItemFullData.map((item) => [item.name, item]),
);
