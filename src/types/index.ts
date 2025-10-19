export type PokemonForm = `${number}-${number}`;

export const EPokemonType = [
  "一般",
  "格斗",
  "飞行",
  "毒",
  "地面",
  "岩石",
  "虫",
  "幽灵",
  "钢",
  "火",
  "水",
  "草",
  "电",
  "超能力",
  "冰",
  "龙",
  "恶",
  "妖精",
] as const;

export type PokemonType = (typeof EPokemonType)[number];

export const EMoveCategory = ["物理", "特殊", "变化"] as const;

export type MoveCategory = (typeof EMoveCategory)[number];

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

export type SearchResult = {
  isEmpty: boolean;
  pokemon: Pokemon[];
  moves: Move[];
};
