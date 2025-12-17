import { Button } from "antd";
import { FC } from "react";

import { Pokemon } from "@/types";

import { PokemonIcon } from "./PokemonIcon";

interface IProps {
  className?: string;
  pokemon: Pokemon;
  onClick: () => void;
}

export const PokemonFilterIcon: FC<IProps> = ({ pokemon: p, onClick, className }) => (
  <Button
    onClick={onClick}
    type="link"
    key={`${p.id}-${p.form}`}
    className="flex flex-col items-center justify-start gap-0 w-[72px] h-[96px]"
  >
    <PokemonIcon
      className={className}
      pokemon={p}
      size={48}
    />
    <div>{p.name}</div>
    {p.formName ? <div className="text-gray-400 text-xs">{p.formName}</div> : null}
  </Button>
);
