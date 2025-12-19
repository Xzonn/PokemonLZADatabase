import { IDonutBerry } from "@/types";
import { parseTSV } from "@/utils";

import raw from "./berry.txt?raw";

export const DonutBerries = parseTSV<IDonutBerry>(raw, (dict) => ({
  name: dict["中文名"],
  index: parseInt(dict["编号"], 10),
  sweet: parseInt(dict["甜"], 10),
  spicy: parseInt(dict["辣"], 10),
  sour: parseInt(dict["酸"], 10),
  bitter: parseInt(dict["苦"], 10),
  fresh: parseInt(dict["鲜"], 10),
  level: parseInt(dict["增幅等级"], 10),
  calories: parseInt(dict["饱腹能量"], 10),
}));
