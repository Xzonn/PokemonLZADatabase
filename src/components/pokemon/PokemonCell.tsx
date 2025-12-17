import { FC } from "react";

import { Pokemon } from "@/types";
import { Link, getPokemonFullName } from "@/utils";

import { PokemonIcon } from "./PokemonIcon";

interface IProps {
  pokemon?: Pokemon;
  level?: number;
  shiny?: boolean;
}

export const PokemonCell: FC<IProps> = ({ pokemon, level, shiny = false }) =>
  pokemon ? (
    <Link
      to={`/p/${getPokemonFullName(pokemon)}`}
      className="cell-pokemon"
    >
      <PokemonIcon
        pokemon={pokemon}
        shiny={shiny}
      />
      <div>
        <div className="pokemon-name">
          {pokemon.name}
          {level !== undefined ? ` Lv.${level}` : ""}
        </div>
        <div className="pokemon-form">{pokemon.formName}</div>
      </div>
    </Link>
  ) : null;
