import { PokemonForm } from "./constants";
import { Pokemon } from "./pokemon";

export interface IPokemonSpawn {
  index: number;
  form: PokemonForm;
  pokemon: Pokemon;
  levelMin: number;
  levelMax: number;
  alphaRate: number;
  alphaLevelBoost: number;
}

export interface IPokemonSpawnDetail extends IPokemonSpawn {
  rarity: number;
  time?: "" | "日" | "夜";
  weather?: "" | "晴" | "阴";
}

export interface ISpawnPoint {
  index: number;
  name: string;
  location: string;
  x: number;
  y: number;
  isAlpha: boolean;
  pokemon: IPokemonSpawnDetail[];
}

export interface IItemPoint {
  index: number;
  name: string;
  location: string;
  x: number;
  y: number;
  item: string;
  icon: string;
}
