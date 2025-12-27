import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 151,
  internal: 161,
  summary: "在异次元密阿雷的角落，来电伍的卡娜莉与塔拉刚向你发起了２ｖｓ２的挑战！和琵鲁共战，获得胜利吧！",
  process: ["在宝可梦对战中打赢来电伍。"],
  location: "木根工程内的异次元扭洞",
  unlockCondition: (
    <>
      “
      <MissionLink
        category="异"
        index={8}
      />
      ”在锈蚀组事务所听完了对话
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "25934240456",
};
