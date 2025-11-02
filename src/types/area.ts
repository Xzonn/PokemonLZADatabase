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
