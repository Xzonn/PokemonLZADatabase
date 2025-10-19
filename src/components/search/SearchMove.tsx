import React from "react";
import { Link } from "react-router-dom";

import { Move } from "@/types";
import { renderCategory, renderType } from "@/utils";

const SearchMove: React.FC<{ result: Move; onClick: () => void }> = ({ result, onClick }) => (
  <Link
    to={`/m/${result.name}`}
    onClick={onClick}
    className="search-item search-item-move"
  >
    <div>
      <div className="move-name-line">
        <div className="move-name">{result.name}</div>
        <span className="badges">
          {renderType(result.type, false)}
          {renderCategory(result.category)}
        </span>
      </div>
    </div>
  </Link>
);

export default SearchMove;
