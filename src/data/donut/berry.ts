import { IDonutBerry } from "@/types";

import raw from "./berry.txt?raw";

const lines = raw.trim().split("\n");
const header = lines[0].split("\t");

export const DonutBerries = lines.slice(1).map((line) => {
  const parts = line.split("\t");
  const dict = Object.fromEntries(parts.map((part, i) => [header[i], part]));
  const item: IDonutBerry = {
    name: dict["中文名"],
    index: parseInt(dict["编号"], 10),
    sweet: parseInt(dict["甜"], 10),
    spicy: parseInt(dict["辣"], 10),
    sour: parseInt(dict["酸"], 10),
    bitter: parseInt(dict["苦"], 10),
    fresh: parseInt(dict["鲜"], 10),
    level: parseInt(dict["增幅等级"], 10),
    calories: parseInt(dict["饱腹能量"], 10),
  };
  return item;
});
