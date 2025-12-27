import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 152,
  internal: 162,
  summary: "在异次元密阿雷的角落，正义社的皙白与沐净向你发起了２ｖｓ２的挑战！和可尔妮共战，获得胜利吧！",
  process: ["在宝可梦对战中打赢正义社。"],
  location: "正义社门前的异次元扭洞",
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
  cid: "25934240363",
};
