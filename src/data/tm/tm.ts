import { MoveDataByName } from "../moves";
import raw from "./tm.txt?raw";

import { TM, TMFull } from "@/types";

const lines = raw.trim().split("\n");
const header = lines[0].split("\t");

export const TMData = lines.slice(1).map((line) => {
  const parts = line.split("\t");
  const dict = Object.fromEntries(parts.map((part, i) => [header[i], part]));
  const item: TM = {
    index: parseInt(dict["编号"], 10),
    tmName: dict["中文名"],
    name: dict["招式"],
    researchLevel: parseInt(dict["茉蜜姬调查等级"] ?? "", 10) || null,
    sideMission: parseInt(dict["副任务"] ?? "", 10) || null,
    location: dict["地点"] || null,
    x: dict["X"] ? parseInt(dict["X"], 10) : null,
    y: dict["Y"] ? parseInt(dict["Y"], 10) : null,
    z: dict["Z"] ? parseInt(dict["Z"], 10) : null,
  };
  const move = MoveDataByName[item.name];
  return {
    ...item,
    ...move,
  } as TMFull;
});

export const TMDataByName: Record<string, TMFull> = Object.fromEntries(TMData.map((tm) => [tm.tmName, tm]));
export const TMDataByMove: Record<string, TMFull> = Object.fromEntries(TMData.map((tm) => [tm.name, tm]));
export const TMDataByIndex: Record<number, TMFull> = Object.fromEntries(TMData.map((tm) => [tm.index, tm]));
