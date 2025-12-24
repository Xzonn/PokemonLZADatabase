import { FC } from "react";
import { Link } from "@/utils";

import { Item } from "@/types";

import { ItemIconWithoutTooltip } from "../item";

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
