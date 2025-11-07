import { PokemonType } from "./common";
import { Item } from "./item";
import { Move } from "./move";
import { Pokemon } from "./pokemon";

export interface NavigationItem {
  path: string;
  label: string;
  icon: string;
  language?: "zh" | "zh-hans" | "zh-hant" | "ja" | "en";
}

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
    }
  | {
      type: "side";
      data: number;
    };
