import { IDountFlavor } from "@/types";
import { parseTSV } from "@/utils";

import raw from "./flavor.txt?raw";

export const DonutFlavors = parseTSV<IDountFlavor>(raw, (dict) => ({
  name: dict["中文名"],
  flavor: dict["风味"],
  effect: dict["说明"],
  boosts: [dict["0"], dict["1"], dict["2"], dict["3"]],
}));
