import raw from "./pokemon.txt?raw";

import { Pokemon, PokemonForm, PokemonType } from "@/types";
import { getPokemonFullId, getPokemonFullName } from "@/utils";

const HiddenPokemonForm: PokemonForm[] = [
  "658-1", // 小智版甲贺忍蛙,
];

const lines = raw.trim().split("\n");
const header = lines[0].split("\t");

export const PokemonData = lines
  .slice(1)
  .map((line) => {
    const parts = line.split("\t");
    const dict = Object.fromEntries(parts.map((part, i) => [header[i], part]));
    const base = ["HP", "攻击", "防御", "特攻", "特防", "速度"].map((stat) => parseInt(dict[stat], 10));
    const item: Pokemon = {
      id: parseInt(dict["编号"], 10),
      national: parseInt(dict["全国图鉴编号"], 10),
      dex: parseInt(dict["图鉴编号"], 10),
      form: parseInt(dict["形态编号"], 10),
      name: dict["中文名"],
      japanese: dict["日文名"],
      english: dict["英文名"],
      formName: dict["形态名"],
      types: [dict["属性1"] as PokemonType, dict["属性2"] as PokemonType],
      base: base,
      baseTotal: base.reduce((a, b) => a + b, 0),
      x: parseInt(dict["X"], 10),
      y: parseInt(dict["Y"], 10),
    };
    return item;
  })
  .filter((pokemon) => !HiddenPokemonForm.includes(getPokemonFullId(pokemon)));
export const PokemonDataByName: Record<string, Pokemon> = Object.fromEntries(
  PokemonData.map((pokemon) => [getPokemonFullName(pokemon), pokemon]),
);
export const PokemonDataById: Record<PokemonForm, Pokemon> = Object.fromEntries(
  PokemonData.map((pokemon) => [getPokemonFullId(pokemon), pokemon]),
);
