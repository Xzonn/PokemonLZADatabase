import { MissionDetail } from "@/types";
import { Link } from "@/utils";

export const information: MissionDetail = {
  index: 105,
  internal: 79,
  summary: "有位电影导演正在拍摄恐怖片。把要在重要场景登场的朽木妖借给他吧。",
  process: ["把朽木妖加入同行队伍，在夜晚帮忙拍摄电影。"],
  location: "榴红６号街区 安息墓地南",
  unlockCondition: (
    <>
      完成了<Link to="/side/055">副任务 055</Link>
    </>
  ),
};
