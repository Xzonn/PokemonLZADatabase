import raw from "./research.txt?raw";

import { Research } from "@/types";

const lines = raw.trim().split("\n");
const header = lines[0].split("\t");

export const ResearchData = lines
  .slice(1)
  .map((line, index) => {
    const parts = line.split("\t");
    const dict = Object.fromEntries(parts.map((part, i) => [header[i], part]));
    const item: Research = {
      index,
      name: dict["中文名"],
      description: dict["描述"],
      rowSpan: dict["描述"].length > 0 ? 1 : 0,
      point: parseInt(dict["点数"], 10),
      count: parseInt(dict["数量"], 10),
    };
    return item;
  })
  .reduceRight((acc, cur) => {
    if (acc[0]?.description === "") {
      cur.rowSpan += acc[0]!.rowSpan + 1;
      acc[0]!.rowSpan = 0;
    }
    return [cur, ...acc];
  }, [] as Research[]);
