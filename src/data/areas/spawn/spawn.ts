import { PokemonDataById } from "@/data";
import { IPokemonSpawnDetail, ISpawnPoint, PokemonForm } from "@/types";
import { parseTSV } from "@/utils";

import spawn_t1 from "./spawn_t1.txt?raw";
import spawn_t2 from "./spawn_t2.txt?raw";
import spawn_t3 from "./spawn_t3.txt?raw";
import spawn_t3_2 from "./spawn_t3_2.txt?raw";

const parseSpawn = (raw: string) =>
  parseTSV<ISpawnPoint>(raw, (dict) => ({
    index: parseInt(dict["编号"], 10),
    name: dict["名称"],
    location: dict["地点"],
    x: parseInt(dict.X, 10),
    y: parseInt(dict.Y, 10),
    isAlpha: dict["头目"] === "1",
    pokemon: dict["宝可梦列表"].split("|").map((p, index) => {
      const [form, levelMinStr, levelMaxStr, alphaRateStr, alphaLevelBoostStr, rarityStr, time = "", weather = ""] =
        p.split("+");

      const item: IPokemonSpawnDetail = {
        index,
        form: form as PokemonForm,
        pokemon: PokemonDataById[form as PokemonForm],
        levelMin: parseInt(levelMinStr, 10),
        levelMax: parseInt(levelMaxStr, 10),
        alphaRate: parseInt(alphaRateStr || "0", 10),
        alphaLevelBoost: parseInt(alphaLevelBoostStr || "0", 10),
        rarity: parseFloat(rarityStr || "0"),
        time: time as IPokemonSpawnDetail["time"],
        weather: weather as IPokemonSpawnDetail["weather"],
      };
      return item;
    }),
  }));

export const SpawnDataLumiose = parseSpawn(spawn_t1);
export const SpawnDataLysandreLabs = parseSpawn(spawn_t2);
export const SpawnDataSewersCh5 = parseSpawn(spawn_t3);
export const SpawnDataSewersCh6 = parseSpawn(spawn_t3_2);
