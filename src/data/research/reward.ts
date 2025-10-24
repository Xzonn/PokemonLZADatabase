import raw from "./reward.txt?raw";

import { ResearchReward } from "@/types";

const lines = raw.trim().split("\n");
const header = lines[0].split("\t");

export const ResearchRewardData = lines.slice(1).map((line) => {
  const parts = line.split("\t");
  const dict = Object.fromEntries(parts.map((part, i) => [header[i], part]));
  const item: ResearchReward = {
    level: parseInt(dict["等级"], 10),
    item: dict["道具"],
    move: dict["招式"] || null,
    count: parseInt(dict["数量"], 10),
  };
  return item;
});
