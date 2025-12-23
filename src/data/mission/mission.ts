import { MissionSummary } from "@/types";
import { parseTSV } from "@/utils";

import raw from "./mission.txt?raw";

export const MissionData = parseTSV<MissionSummary>(raw, (dict) => ({
  category: dict["分类"] as MissionSummary["category"],
  index: parseInt(dict["编号"], 10),
  name: dict["中文名"],
  requester: dict["委托人"],
  prize: dict["奖金"] ? parseInt(dict["奖金"], 10) : 0,
  items: dict["道具"]
    ? dict["道具"].split("|").map((part) => {
        const [item, number] = part.split("×");
        return { item, number: parseInt(number || "1", 10) };
      })
    : [],
  pokemon: dict["宝可梦"]
    ? dict["宝可梦"].split("|").map((part) => {
        const [form, levelAndShiny] = part.split("Lv.");
        const [level, shiny] = levelAndShiny.includes("S")
          ? [levelAndShiny.slice(0, -1), true]
          : [levelAndShiny, undefined];
        return {
          name: form,
          level: parseInt(level, 10),
          shiny,
        };
      })
    : [],
  x: parseInt(dict.X, 10),
  y: parseInt(dict.Y, 10),
  isHyperspace: Boolean(dict["异次元"]),
}));

export const MainMissionData = MissionData.filter((mission) => mission.category === "主");
export const HyperspaceMissionData = MissionData.filter((mission) => mission.category === "异");
export const SideMissionData = MissionData.filter((mission) => mission.category === "副");
