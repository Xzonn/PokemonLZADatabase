import { IDonutButter, MissionCategory } from "@/types";
import { parseTSV } from "@/utils";

import raw from "./butter.txt?raw";

export const DonutButters = parseTSV<IDonutButter>(raw, (dict) => ({
  name: dict["中文名"],
  count: parseInt(dict["数量"], 10),
  missionCategory: dict["任务类型"] as MissionCategory,
  missionIndex: parseInt(dict["任务编号"], 10),
  pokemon: dict["宝可梦"] || null,
}));
