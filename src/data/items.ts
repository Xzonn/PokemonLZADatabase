import raw from "./items.txt?raw";

import { Item } from "@/types";

const lines = raw.trim().split("\n");
const header = lines[0].split("\t");

export const ItemData = lines.slice(1).map((line) => {
  const parts = line.split("\t");
  const dict = Object.fromEntries(parts.map((part, i) => [header[i], part]));
  const item: Item = {
    id: parseInt(dict["编号"], 10),
    name: dict["中文名"],
    x: parseInt(dict["X"], 10),
    y: parseInt(dict["Y"], 10),
    move: dict["招式"] || null,
  };
  return item;
});
export const ItemDataByName: Record<string, Item> = Object.fromEntries(ItemData.map((item) => [item.name, item]));
export const ItemDataById: Record<number, Item> = Object.fromEntries(ItemData.map((item) => [item.id, item]));
