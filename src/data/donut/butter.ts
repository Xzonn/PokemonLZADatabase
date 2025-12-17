import { IDonutButter } from "@/types";

import raw from "./butter.txt?raw";

const lines = raw.trim().split("\n");
const header = lines[0].split("\t");

export const DonutButters = lines.slice(1).map((line) => {
  const parts = line.split("\t");
  const dict = Object.fromEntries(parts.map((part, i) => [header[i], part]));
  const item: IDonutButter = {
    name: dict["中文名"],
    count: parseInt(dict["数量"], 10),
  };
  return item;
});
