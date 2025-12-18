export interface TrainerPokemon {
  name: string;
  level: number;
  nature?: string;
  ball?: string;
  moves: string;
  item?: string;
  shiny?: 1;
  alpha?: 1;
  ivs?: string;
  evs?: number[];
}

export interface TrainerBase {
  id: string;
  trtype: string;
  trname: string;
  pokemon: TrainerPokemon[];
}

export interface TrainerNormal extends TrainerBase {
  prize: number;
}

export interface TrainerRoyale extends TrainerBase {
  rank: string;
}
