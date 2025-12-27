import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 122,
  internal: 154,
  summary: "用９９９枚硬币就能让索财灵进化成赛富豪。在异次元密阿雷收集硬币，给委托人看看赛富豪吧。",
  process: ["将赛富豪带给委托人看。"],
  location: "榴红１号街区",
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
  cid: "34892548292",
};
