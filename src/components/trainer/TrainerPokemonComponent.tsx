import { PokemonIcon } from "../pokemon/PokemonIcon";

import { PokemonDataByName } from "@/data";
import { TrainerPokemon } from "@/types";

export const TrainerPokemonComponent: React.FC<{ pokemon: TrainerPokemon }> = ({ pokemon: p }) => {
  const pokemon = PokemonDataByName[p.name];

  return pokemon ? (
    <div className="flex flex-col items-center w-[72px]">
      <PokemonIcon
        pokemon={pokemon}
        link
      />
      <div>{pokemon.name}</div>
      <div>Lv. {p.level}</div>
    </div>
  ) : null;
};
