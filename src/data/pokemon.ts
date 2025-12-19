import { Pokemon, PokemonForm, PokemonType } from "@/types";
import { getPokemonFullId, getPokemonFullName, parseTSV } from "@/utils";

import raw from "./pokemon.txt?raw";

const HiddenPokemonForm: PokemonForm[] = [
  "658-1", // 小智版甲贺忍蛙,
];

export const PokemonData = parseTSV<Pokemon>(raw, (dict) => {
  const base = ["HP", "攻击", "防御", "特攻", "特防", "速度"].map((stat) => parseInt(dict[stat], 10));
  const dex = parseInt(dict["图鉴编号"], 10);
  const item: Pokemon = {
    id: parseInt(dict["编号"], 10),
    national: parseInt(dict["全国图鉴编号"], 10),
    dex,
    dexHyperspace: dex > 232 ? dex - 232 : dex + 10000,
    form: parseInt(dict["形态编号"], 10),
    name: dict["中文名"],
    japanese: dict["日文名"],
    english: dict["英文名"],
    formName: dict["形态名"],
    types: [dict["属性1"] as PokemonType, dict["属性2"] as PokemonType],
    base: base,
    baseTotal: base.reduce((a, b) => a + b, 0),
    x: parseInt(dict.X, 10),
    y: parseInt(dict.Y, 10),
  };
  return item;
}).filter((pokemon) => !HiddenPokemonForm.includes(getPokemonFullId(pokemon)));
export const PokemonDataByName: Record<string, Pokemon> = Object.fromEntries(
  PokemonData.map((pokemon) => [getPokemonFullName(pokemon), pokemon]),
);
export const PokemonDataById: Record<PokemonForm, Pokemon> = Object.fromEntries(
  PokemonData.map((pokemon) => [getPokemonFullId(pokemon), pokemon]),
);
