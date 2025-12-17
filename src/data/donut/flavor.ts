import { IDountFlavor } from "@/types";

import raw from "./flavor.txt?raw";

const lines = raw.trim().split("\n");
const header = lines[0].split("\t");

export const DonutFlavors = lines.slice(1).map((line) => {
  const parts = line.split("\t");
  const dict = Object.fromEntries(parts.map((part, i) => [header[i], part]));
  const item: IDountFlavor = {
    name: dict["中文名"],
    flavor: dict["风味"],
    effect: dict["说明"],
  };
  return item;
});
