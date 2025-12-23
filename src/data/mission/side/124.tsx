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
      完成“
      <MissionLink
        category="副"
        index={120}
      />
      ”后
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "34892549312",
};
