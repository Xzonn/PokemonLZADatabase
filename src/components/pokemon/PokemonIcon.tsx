import cn from "classnames";
import React from "react";

import Link from "../Link";

import { Pokemon } from "@/types";
import { getPokemonFullName } from "@/utils";

export interface IPokemonIconProps {
  pokemon: Pokemon;
  size?: number;
  shiny?: boolean;
  className?: string;
  link?: boolean;
}

const PokemonIcon: React.FC<IPokemonIconProps> = ({
  pokemon,
  size = 64,
  shiny = false,
  className = "",
  link = false,
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
    />
  ) : (
    <div
      className={combinedClassName}
      style={style}
    />
  );
};

export default PokemonIcon;
