import { FC } from "react";
import { Link } from "react-router-dom";

import { ItemIconWithoutTooltip } from "../item";

import { Item } from "@/types";

interface IProps {
  result: Item;
  onClick: () => void;
}

export const SearchItem: FC<IProps> = ({ result, onClick }) => (
  <Link
    to={result.page ? `/${result.page}` : `/i/${result.name}`}
    onClick={onClick}
    className="search-item search-item-item"
  >
    <ItemIconWithoutTooltip
      item={result}
      size={40}
    />
    <div className="search-item-name">
      {result.name}
      {result.move ? `（${result.move}）` : null}
    </div>
  </Link>
);
