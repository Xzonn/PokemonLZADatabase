import { PokemonForm, PokemonType } from "./common";

export interface Evolution {
  level: number;
  method: number;
  argument: number;
  previous: PokemonForm;
  target: PokemonForm;
}

export interface MoveLevelUp {
  level: number;
  levelPlus: number;
  move: number;
}

export interface MoveTM {
  index: number;
  move: number;
}

export interface Pokemon {
  id: number;
  national: number;
  dex: number;
  form: number;
  name: string;
  japanese: string;
  english: string;
  formName: string;
  types: [PokemonType, PokemonType];
  base: number[];
  baseTotal: number;
  x: number;
  y: number;
}

export interface PokemonFull extends Pokemon {
  expGrowth: number;
  catchRate: number;
  gender: [number, number];
  baseFriendship: number;
  evoStage: number;
  evYield: number[];
  evolutions: Evolution[];
  movesLevelUp: MoveLevelUp[];
  movesTM: MoveTM[];
  description: string;
}
