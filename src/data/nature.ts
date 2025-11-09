import { NatureItem, Stat } from "@/types";
import { parseTSV } from "@/utils";

import raw from "./nature.txt?raw";

export const NatureData = parseTSV<NatureItem>(raw, (dict) => ({
  id: parseInt(dict["编号"], 10),
  name: dict["中文名"],
  "+": dict["+"] as Stat,
  "-": dict["-"] as Stat,
}));

export const NatureDataByName: Record<string, NatureItem> = Object.fromEntries(
  NatureData.map((nature) => [nature.name, nature]),
);
