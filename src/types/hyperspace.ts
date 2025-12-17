import { PokemonForm, PokemonType } from "./constants";

export interface IHyperspaceSpawn {
  type: PokemonType;
  star: number;
  areaIndex: number;
  index: number;
  focus: PokemonForm[];
  pokemonRaw: string;
}
