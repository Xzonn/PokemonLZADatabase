import { ItemDataByName, PokemonDataByName } from "@/data";
import { TrainerPokemon } from "@/types";

import { ItemIcon } from "../item";
import { PokemonIcon } from "../pokemon/PokemonIcon";

export const TrainerPokemonComponent: React.FC<{ pokemon: TrainerPokemon }> = ({ pokemon: p }) => {
  const pokemon = PokemonDataByName[p.name];

  return pokemon ? (
    <div className="trainer-pokemon">
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
