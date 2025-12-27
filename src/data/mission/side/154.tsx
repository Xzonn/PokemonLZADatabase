import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 154,
  internal: 164,
  summary: "在异次元密阿雷的角落，ＭＳＢＣ的由紫与春紫向你发起了２ｖｓ２的挑战！和玳萝共战，获得胜利吧！",
  process: ["在宝可梦对战中打赢ＭＳＢＣ。"],
  location: "秀丽世大酒店旁边的异次元扭洞",
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
  cid: "25934240523",
};
