import raw from "./side.txt?raw";

import { SideMission } from "@/types";

const lines = raw.trim().split("\n");
const header = lines[0].split("\t");

export const SideMissionData = lines.slice(1).map((line) => {
  const parts = line.split("\t");
  const dict = Object.fromEntries(parts.map((part, i) => [header[i], part]));
  const item: SideMission = {
    index: parseInt(dict["编号"], 10),
    name: dict["中文名"],
    requester: dict["委托人"],
    prize: parseInt(dict["奖金"], 10),
    items: dict["道具"].split("|").map((part) => {
      const [item, number] = part.split("×");
      return { item, number: parseInt(number, 10) };
    }),
    x: parseInt(dict["X"], 10),
    y: parseInt(dict["Y"], 10),
    z: parseInt(dict["Z"], 10),
    unlockCondition: dict["解锁条件"],
  };
  return item;
});
