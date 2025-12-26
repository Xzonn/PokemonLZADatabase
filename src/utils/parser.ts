import { IItemReward } from "@/types";

export const parseTSV = <T>(raw: string, handleDict: (dict: Record<string, string>, index: number) => T): T[] => {
  const lines = raw.trim().split("\n");
  const header = lines[0].split("\t");

  return lines.slice(1).map((line, index) => {
    const parts = line.split("\t");
    const dict = Object.fromEntries(parts.map((part, i) => [header[i], part]));
    return handleDict(dict, index);
  });
};

export const parseObtain = (raw: string) =>
  parseTSV<IItemReward>(raw, (dict) => ({
    item: dict["道具"],
    quantity: dict["数量"] ? parseInt(dict["数量"], 10) : 1,
    probability: dict["概率"] ? parseFloat(dict["概率"]) : undefined,
    condition: dict["条件"] || undefined,
  }));
