import { Move } from "./move";
import { Pokemon } from "./pokemon";

export type SearchResult = {
  isEmpty: boolean;
  pokemon: Pokemon[];
  moves: Move[];
};
