import React from "react";
import { Link } from "react-router-dom";

import { PokemonType } from "@/types";
import { Icon } from "@/utils";

export const SearchType: React.FC<{ result: PokemonType; onClick: () => void }> = ({ result, onClick }) => (
  <Link
    to={`/t/${result}`}
    onClick={onClick}
    className="search-item"
  >
    <Icon
      className={`rounded-lg bg-${result}`}
      name={result}
      size={40}
    />
    <div className="search-item-name">{result}属性</div>
  </Link>
);
