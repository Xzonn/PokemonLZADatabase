import { IMapPosition } from "@/types";

import raw from "./positions.txt?raw";

const lines = raw.trim().split("\n");
const header = lines[0].split("\t");

export const AreaPositions = lines.slice(1).map((line) => {
  const parts = line.split("\t");
  const dict = Object.fromEntries(parts.map((part, i) => [header[i], part]));
  const position: IMapPosition = {
    name: dict["中文名"],
    index: parseInt(dict["编号"], 10),
    x: parseInt(dict.X, 10),
    y: parseInt(dict.Y, 10),
    link: dict["链接"] || null,
    icon: dict["图标"],
  };
  return position;
});
