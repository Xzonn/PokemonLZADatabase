import { MoveCategory, PokemonForm, PokemonType } from "./common";

export interface PokemonLevelUp {
  fullId: PokemonForm;
  level: number;
}

export interface PokemonTM {
  fullId: PokemonForm;
}

export interface Move {
  id: number;
  name: string;
  japanese: string;
  english: string;
  type: PokemonType;
  category: MoveCategory;
  power: number;
  wait: number;
  description: string;
}

export interface MoveFull extends Move {
  pokemonLevelUp: PokemonLevelUp[];
  pokemonTM: PokemonTM[];
}
