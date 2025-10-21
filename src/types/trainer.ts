export interface TrainerPokemonMove {
  name: string;
  plus?: boolean;
}

export interface TrainerPokemon {
  name: string;
  level: number;
  nature: string;
  ball: string;
  moves: TrainerPokemonMove[];
  item?: string;
  shiny?: boolean;
  ivs?: number[];
  evs?: number[];
}

export interface TrainerBase {
  trtype: string;
  trname: string;
  pokemon: TrainerPokemon[];
}

export interface TrainerNormal extends TrainerBase {
  prize: number;
}

export interface TrainerRoyal extends TrainerBase {
  rank: string | null;
}
