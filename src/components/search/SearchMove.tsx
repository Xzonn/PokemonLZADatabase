import React from "react";
import { Link } from "react-router-dom";

import { Move } from "@/types";
import { CategoryIcon, TypeIcon } from "@/utils";

export const SearchMove: React.FC<{ result: Move; onClick: () => void }> = ({ result, onClick }) => (
  <Link
    to={`/m/${result.name}`}
    onClick={onClick}
    className="search-item search-item-move"
  >
    <div>
      <div className="move-name-line">
        <div className="move-name">{result.name}</div>
        <span className="badges">
          <TypeIcon
            type={result.type}
            link={false}
          />
          <CategoryIcon category={result.category} />
        </span>
      </div>
    </div>
  </Link>
);
