import { PokemonType } from "./common";
import { Item } from "./item";
import { Move } from "./move";
import { Pokemon } from "./pokemon";

export type NavigationItem = {
  path: string;
  label: string;
  icon: string;
};

export type SearchResult =
  | {
      type: "pokemon";
      data: Pokemon;
    }
  | {
      type: "move";
      data: Move;
    }
  | {
      type: "type";
      data: PokemonType;
    }
  | {
      type: "item";
      data: Item;
    }
  | {
      type: "navigation";
      data: NavigationItem;
    };
