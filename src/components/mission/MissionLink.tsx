import { FC } from "react";

import { MissionData } from "@/data";
import { MissionCategory } from "@/types";
import { Link, getMissionIndex } from "@/utils";

interface IProps {
  category?: MissionCategory;
  index: number | string;
  showTitle?: boolean;
}

export const MissionLink: FC<IProps> = ({ category = "副", index, showTitle = true }) => {
  const indexString = typeof index === "number" ? getMissionIndex(index) : index;
  const title = showTitle
    ? `：${
        MissionData.find((mission) => mission.category === category && getMissionIndex(mission.index) === indexString)
          ?.name
      }`
    : null;

  switch (category) {
    case "主":
      return (
        <Link to={`/main/${indexString}`}>
          主任务 {indexString}
          {title}
        </Link>
      );
    case "异":
      return (
        <Link to={`/hyperspace/${indexString}`}>
          异次元任务 {indexString}
          {title}
        </Link>
      );
    case "副":
    default:
      return (
        <Link to={`/side/${indexString}`}>
          副任务 {indexString}
          {title}
        </Link>
      );
  }
};
