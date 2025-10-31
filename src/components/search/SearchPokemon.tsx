import React from "react";
import { Link } from "react-router-dom";

import { PokemonIcon } from "../pokemon/PokemonIcon";

import { Pokemon } from "@/types";
import { TypeIcons, getPokemonFullName } from "@/utils";

export const SearchPokemon: React.FC<{ result: Pokemon; onClick: () => void }> = ({ result, onClick }) => (
  <Link
    to={`/p/${getPokemonFullName(result)}`}
    onClick={onClick}
    className="search-item search-item-pokemon"
  >
    <PokemonIcon
      pokemon={result}
      size={40}
    />
    <div>
      <div className="pokemon-name-line">
        <div className="pokemon-name">{result.name}</div>
        <TypeIcons
          types={result.types}
          link={false}
        />
      </div>
      <div className="pokemon-form">{result.formName}</div>
    </div>
  </Link>
);

export default SearchPokemon;
