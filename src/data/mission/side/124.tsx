import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 124,
  internal: 191,
  summary: "有的招式会“唰！唰！唰！”地连续发出攻击。巧妙地躲开对手的连续攻击，取得华丽的胜利吧。",
  process: ["在宝可梦对战中打赢委托人。"],
  location: "发呆公园",
  unlockCondition: (
    <>
      “
      <MissionLink
        category="异"
        index={1}
      />
      ”初次探索了异次元密阿雷
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "34892549312",
};
