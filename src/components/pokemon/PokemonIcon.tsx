import cn from "classnames";
import React from "react";

import { Pokemon } from "@/types";
import { Link, getPokemonFullName } from "@/utils";

export interface IPokemonIconProps {
  pokemon: Pokemon;
  size?: number;
  shiny?: boolean;
  className?: string;
  link?: boolean;
  children?: React.ReactNode;
}

export const PokemonIcon: React.FC<IPokemonIconProps> = ({
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
