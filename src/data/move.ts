import raw from "./move.txt?raw";

import { Move, MoveCategory, PokemonType } from "@/types";

const lines = raw.trim().split("\n");
const header = lines[0].split("\t");

export const MoveData = lines.slice(1).map((line) => {
  const parts = line.split("\t");
  const dict = Object.fromEntries(parts.map((part, i) => [header[i], part]));
  const item: Move = {
    id: parseInt(dict["编号"], 10),
    name: dict["中文名"],
    japanese: dict["日文名"],
    english: dict["英文名"],
    type: dict["属性"] as PokemonType,
    category: dict["分类"] as MoveCategory,
    power: dict["威力"] === "—" ? 0 : parseInt(dict["威力"], 10),
    wait: parseInt(dict["发动时间"], 10),
    description: dict["说明"],
  };
  return item;
});
export const MoveDataByName: Record<string, Move> = Object.fromEntries(MoveData.map((move) => [move.name, move]));
export const MoveDataById: Record<number, Move> = Object.fromEntries(MoveData.map((move) => [move.id, move]));
