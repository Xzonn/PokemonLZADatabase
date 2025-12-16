import { FC } from "react";
import { Link } from "react-router-dom";

import { MainMissionData } from "@/data";
import { Icon, getMissionIndex } from "@/utils";

interface IProps {
  result: number;
  onClick: () => void;
}

export const SearchMainMission: FC<IProps> = ({ result, onClick }) => (
  <Link
    to={`/main/${getMissionIndex(result)}`}
    onClick={onClick}
    className="search-item"
  >
    <Icon
      name="main-mission"
      size={40}
    />
    <div className="search-item-name">
      主任务 {getMissionIndex(result)}：{MainMissionData.find((m) => m.index === result)?.name}
    </div>
  </Link>
);
