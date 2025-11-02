import raw from "./positions.txt?raw";

import { Position } from "@/types";

const lines = raw.trim().split("\n");
const header = lines[0].split("\t");

export const AreaPositions = lines.slice(1).map((line) => {
  const parts = line.split("\t");
  const dict = Object.fromEntries(parts.map((part, i) => [header[i], part]));
  const position: Position = {
    name: dict["中文名"],
    index: parseInt(dict["编号"], 10),
    x: dict["X"] ? parseInt(dict["X"], 10) : null,
    y: dict["Y"] ? parseInt(dict["Y"], 10) : null,
  } as Position;
  return position;
});

export const AreaNames = AreaPositions.map((pos) => pos.name);
