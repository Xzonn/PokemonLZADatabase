import { SideMissionInformation } from "@/types";
import { Link } from "@/utils";

export const information: SideMissionInformation = {
  index: 105,
  internal: 79,
  name: "《恶灵老树朽木妖》",
  requester: "导演",
  summary: "有位电影导演正在拍摄恐怖片。把要在重要场景登场的朽木妖借给他吧。",
  process: ["把朽木妖加入同行队伍，在夜晚帮忙拍摄电影。"],
  prize: 4800,
  items: [
    {
      item: "黑暗球",
      number: 3,
    },
    {
      item: "劲爽汽水",
      number: 1,
    },
  ],
  location: "榴红６号街区 安息墓地南",
  unlockCondition: (
    <>
      完成了<Link to="/side/055">副任务 055</Link>
    </>
  ),
};
