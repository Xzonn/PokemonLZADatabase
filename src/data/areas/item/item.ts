import { IItemPoint } from "@/types";
import { parseTSV } from "@/utils";

import item_t1 from "./item_t1.txt?raw";
import item_t2 from "./item_t2.txt?raw";
import item_t3 from "./item_t3.txt?raw";
import item_t3_2 from "./item_t3_2.txt?raw";

const parseItem = (raw: string) =>
  parseTSV<IItemPoint>(raw, (dict) => ({
    index: parseInt(dict["编号"], 10),
    name: dict["名称"],
    location: dict["地点"],
    x: parseInt(dict.X, 10),
    y: parseInt(dict.Y, 10),
    item: dict["道具"],
    icon: dict["图标"],
  }));

export const ItemDataLumiose = parseItem(item_t1);
export const ItemDataLysandreLabs = parseItem(item_t2);
export const ItemDataSewersCh5 = parseItem(item_t3);
export const ItemDataSewersCh6 = parseItem(item_t3_2);
