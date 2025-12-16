import { FC } from "react";

import { ItemDataByName, PokemonDataByName } from "@/data";
import { Link } from "@/utils";

import { PokemonIcon } from "./PokemonIcon";
import { ItemIcon } from "../item/ItemIcon";

interface IProps {
  pokemon: {
    name: string;
    level: number;
    item?: string;
    shiny?: boolean;
  }[];
}

export const PokemonList: FC<IProps> = ({ pokemon }) =>
  pokemon.length ? (
    <div className="flex text-center gap-4 flex-wrap">
      {pokemon.map((p, index) => {
        const pokemon = PokemonDataByName[p.name];

        return pokemon ? (
          <div
            className="trainer-pokemon"
            key={index}
          >
            <PokemonIcon
              pokemon={pokemon}
              shiny={p.shiny}
              link
            >
              {p.item ? (
                <ItemIcon
                  item={ItemDataByName[p.item]}
                  link={false}
                />
              ) : null}
            </PokemonIcon>
            <Link to={`/p/${p.name}`}>{pokemon.name}</Link>
            <div>Lv. {p.level}</div>
          </div>
        ) : null;
      })}
    </div>
  ) : (
    "—"
  );
