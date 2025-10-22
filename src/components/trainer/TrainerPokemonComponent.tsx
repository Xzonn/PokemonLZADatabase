import { ItemIcon } from "../item";
import { PokemonIcon } from "../pokemon/PokemonIcon";

import { ItemDataByName, PokemonDataByName } from "@/data";
import { TrainerPokemon } from "@/types";

export const TrainerPokemonComponent: React.FC<{ pokemon: TrainerPokemon }> = ({ pokemon: p }) => {
  const pokemon = PokemonDataByName[p.name];

  return pokemon ? (
    <div className="flex flex-col items-center w-[72px]">
      <PokemonIcon
        pokemon={pokemon}
        link
      >
        {p.item ? (
          <ItemIcon
            item={ItemDataByName[p.item]}
            link={false}
          />
        ) : null}
      </PokemonIcon>
      <div>{pokemon.name}</div>
      <div>Lv. {p.level}</div>
    </div>
  ) : null;
};
