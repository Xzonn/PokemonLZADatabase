import { Pokemon } from "../../types";
import { getPokemonFullName } from "../../utils";
import Link from "../Link";
import PokemonIcon from "./PokemonIcon";
import React from "react";

const PokemonCell: React.FC<{ pokemon?: Pokemon }> = ({ pokemon }) =>
  pokemon ? (
    <Link
      to={`/p/${getPokemonFullName(pokemon)}`}
      className="cell-pokemon"
    >
      <PokemonIcon pokemon={pokemon} />
      <div>
        <div className="pokemon-name">{pokemon.name}</div>
        <div className="pokemon-form">{pokemon.formName}</div>
      </div>
    </Link>
  ) : null;

export default PokemonCell;
