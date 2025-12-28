import { FC } from "react";

import { PokemonDataByName } from "@/data";
import { Pokemon } from "@/types";
import { Link, getPokemonFullName } from "@/utils";

import { PokemonIcon } from "./PokemonIcon";

type IProps = (
  | {
      pokemon: Pokemon;
    }
  | {
      name: string;
      form?: number;
    }
) & {
  level?: number;
  shiny?: boolean;
  alpha?: boolean;
};

export const PokemonLink: FC<IProps> = ({ level, shiny = false, ...rest }) => {
  const pokemon =
    "pokemon" in rest ? rest.pokemon : PokemonDataByName[`${rest.name}${(rest.form ?? 0) > 0 ? `-${rest.form}` : ""}`];
  const notes = pokemon ? [pokemon.formName, level !== undefined ? `Lv.${level}` : ""].filter(Boolean) : [];

  return pokemon ? (
    <>
      <PokemonIcon
        pokemon={pokemon}
        shiny={shiny}
        className="icon-inline"
        size={22}
      />
      <Link to={`/p/${getPokemonFullName(pokemon)}`}>{pokemon.name}</Link>
      {notes.length > 0 ? `（${notes.join("、")}）` : ""}
    </>
  ) : null;
};
