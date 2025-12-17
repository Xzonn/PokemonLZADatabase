import { IHyperspaceSpawn, PokemonForm, PokemonType } from "@/types";

import raw from "./spawn.txt?raw";

const lines = raw.trim().split("\n");
const header = lines[0].split("\t");

export const HyperspaceSpawns = lines.slice(1).map((line) => {
  const parts = line.split("\t");
  const dict = Object.fromEntries(parts.map((part, i) => [header[i], part]));
  const pokemonRaw = dict["宝可梦"];
  const item: IHyperspaceSpawn = {
    type: dict["属性"] as PokemonType,
    star: parseInt(dict["星级"], 10),
    areaIndex: parseInt(dict["编号"], 10),
    index: parseInt(dict["总编号"], 10),
    focus: dict["重点"].split("|") as PokemonForm[],
    pokemonRaw,
  };
  return item;
});
