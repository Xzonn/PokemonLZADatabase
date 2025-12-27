import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 153,
  internal: 163,
  summary: "在异次元密阿雷的角落，锈蚀组的乌羽与吉普索向你发起了２ｖｓ２的挑战！和盖伊／塔霓共战，获得胜利吧！",
  process: ["在宝可梦对战中打赢锈蚀组。"],
  location: "锈蚀组事务所内的异次元扭洞",
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
  cid: "25934240516",
};
