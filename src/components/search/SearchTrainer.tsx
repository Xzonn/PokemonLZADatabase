import { FC } from "react";
import { Link } from "react-router-dom";

import { Icon } from "@/utils";

interface IProps {
  result: string;
  onClick: () => void;
}

export const SearchTrainer: FC<IProps> = ({ result, onClick }) => (
  <Link
    to={`/tr/${result}`}
    onClick={onClick}
    className="search-item"
  >
    <Icon
      name={result}
      size={40}
    />
    <div className="search-item-name">{result}</div>
  </Link>
);
