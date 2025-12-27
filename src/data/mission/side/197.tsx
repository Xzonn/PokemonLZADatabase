import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 197,
  internal: 144,
  summary: "可尔妮向你发起了挑战。你们要遵照精练之塔的传统规则，彼此在同行宝可梦只有１只路卡利欧的状态下对战。",
  process: ["只用１只路卡利欧，在对战中打赢可尔妮。"],
  location: "旅馆Ｚ顶楼",
  unlockCondition: (
    <>
      完成了“
      <MissionLink
        category="异"
        index={12}
      />
      ”
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "25935420448",
};
