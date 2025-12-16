import { FC } from "react";
import { Link } from "react-router-dom";

import { HyperspaceMissionData } from "@/data";
import { Icon, getMissionIndex } from "@/utils";

interface IProps {
  result: number;
  onClick: () => void;
}

export const SearchHyperspaceMission: FC<IProps> = ({ result, onClick }) => (
  <Link
    to={`/hyperspace/${getMissionIndex(result)}`}
    onClick={onClick}
    className="search-item"
  >
    <Icon
      name="main-mission"
      size={40}
    />
    <div className="search-item-name">
      异次元任务 {getMissionIndex(result)}：{HyperspaceMissionData.find((m) => m.index === result)?.name}
    </div>
  </Link>
);
