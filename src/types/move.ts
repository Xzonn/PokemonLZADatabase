import { MoveCategory, PokemonForm, PokemonType } from "./constants";

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

export interface MoveFull {
  pokemonLevelUp?: PokemonLevelUp[];
  pokemonTM?: PokemonTM[];
  pokemonAlpha?: PokemonTM[];
  chargeFrame: number;
  attackLoopFrame: number;
  wazaRangeMin: number;
  wazaRangeMax: number;
  effectiveRange: number;
  minShootNum: number;
  hitPer: number;
  effectTime: number;
  inflictValue: number;
  inflictChance: number;
  critStage: number;
  flinch: number;
  recoil: number;
  selfHeal: number;
  damageHeal: number;
  statAmps: number[];
}
