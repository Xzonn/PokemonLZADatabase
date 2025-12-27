import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 155,
  internal: 165,
  summary: "在异次元密阿雷的角落，新闪焰队的古历与古丽兹向你发起了２ｖｓ２的挑战！和玛琪艾儿共战，获得胜利吧！",
  process: ["在宝可梦对战中打赢新闪焰队。"],
  location: "棱镜塔东南侧的异次元扭洞",
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
  cid: "25934240481",
};
