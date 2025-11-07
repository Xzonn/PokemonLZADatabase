import { FC } from "react";
import { Link } from "react-router-dom";

import { Icon, getSideMissionNumber } from "@/utils";

interface IProps {
  result: number;
  onClick: () => void;
}

export const SearchSideMission: FC<IProps> = ({ result, onClick }) => (
  <Link
    to={`/side/${getSideMissionNumber(result)}`}
    onClick={onClick}
    className="search-item"
  >
    <Icon
      name="side-mission"
      size={40}
    />
    <div className="search-item-name">副任务 {getSideMissionNumber(result)}</div>
  </Link>
);
