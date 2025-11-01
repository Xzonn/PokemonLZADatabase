import raw from "./location.txt?raw";

import { Position } from "@/types";

const lines = raw.trim().split("\n");
const header = lines[0].split("\t");

export const WildZonePositions = lines.slice(1).map((line) => {
  const parts = line.split("\t");
  const dict = Object.fromEntries(parts.map((part, i) => [header[i], part]));
  const position: Position = {
    index: parseInt(dict["编号"], 10),
    x: parseInt(dict["X"], 10),
    y: parseInt(dict["Y"], 10),
  };
  return position;
});
