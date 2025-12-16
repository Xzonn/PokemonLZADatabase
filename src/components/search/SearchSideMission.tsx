import { FC } from "react";
import { Link } from "react-router-dom";

import { Icon, getMissionIndex } from "@/utils";

interface IProps {
  result: number;
  onClick: () => void;
}

export const SearchSideMission: FC<IProps> = ({ result, onClick }) => (
  <Link
    to={`/side/${getMissionIndex(result)}`}
    onClick={onClick}
    className="search-item"
  >
    <Icon
      name="side-mission"
      size={40}
    />
    <div className="search-item-name">副任务 {getMissionIndex(result)}</div>
  </Link>
);
