import { FC } from "react";

import { EPokemonType } from "@/types";
import { Link } from "@/utils";

export const HyperspaceWildZoneNavigation: FC = () => (
  <div className="flex-container max-w-md mx-auto">
    {EPokemonType.map((type) => (
      <Link
        className={`badge bg-${type}`}
        key={type}
        to={`/h/${type}`}
      >
        <div className={`badge-icon icon icon-${type}-white`} />
        <div className="badge-text">{type}</div>
      </Link>
    ))}

    <Link
      className="badge badge-legendary bg-传说"
      to="/h/传说"
    >
      <div className="badge-text">传说的宝可梦</div>
    </Link>
  </div>
);
