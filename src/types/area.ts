import { PokemonForm } from "./common";
import { Pokemon } from "./pokemon";

export interface PokemonSpawn {
  index: number;
  form: PokemonForm;
  pokemon: Pokemon;
  levelMin: number;
  levelMax: number;
  alphaRate: number;
  alphaLevelMin: number;
  alphaLevelMax: number;
}

export interface PokemonSpawnDetail extends PokemonSpawn {
  rarity: number;
  time: "" | "日" | "夜";
  weather: "" | "晴" | "阴";
}

export interface SpawnPoint {
  index: number;
  x: number;
  y: number;
  z: number;
  isAlpha: boolean;
  respawnTime: number;
  radiusMin: number;
  radiusMax: number;
  pokemonRaw: string;
}
