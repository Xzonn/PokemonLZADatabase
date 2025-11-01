import cn from "classnames";
import React, { FC, PropsWithChildren } from "react";

import { Pokemon } from "@/types";
import { Link, getPokemonFullName } from "@/utils";

export interface IPokemonIconProps extends PropsWithChildren {
  pokemon: Pokemon;
  size?: number;
  shiny?: boolean;
  className?: string;
  link?: boolean;
}

export const PokemonIcon: FC<IPokemonIconProps> = ({
  pokemon,
  size = 64,
  shiny = false,
  className = "",
  link = false,
  children,
}) => {
  const { x, y } = pokemon;

  const style: React.CSSProperties = {
    width: size,
    height: size,
    backgroundSize: `${size * 20}px auto`,
    backgroundPosition: `-${x * size}px -${y * size}px`,
  };
  const combinedClassName = cn("icon-pokemon", shiny ? "icon-pokemon-shiny" : "", className || "");

  return link ? (
    <Link
      to={`/p/${getPokemonFullName(pokemon)}`}
      className={combinedClassName}
      style={style}
    >
      {children}
    </Link>
  ) : (
    <div
      className={combinedClassName}
      style={style}
    >
      {children}
    </div>
  );
};

export const PokemonIconWithName: FC<IPokemonIconProps> = ({ pokemon, link, ...rest }) =>
  link ? (
    <Link
      to={`/p/${getPokemonFullName(pokemon)}`}
      className="flex flex-col items-center w-[72px]"
    >
      <PokemonIcon
        pokemon={pokemon}
        {...rest}
      />
      <div>{pokemon.name}</div>
    </Link>
  ) : (
    <div className="flex flex-col items-center w-[72px]">
      <PokemonIcon
        pokemon={pokemon}
        {...rest}
      />
      <div>{pokemon.name}</div>
    </div>
  );
