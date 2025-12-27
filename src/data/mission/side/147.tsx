import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 147,
  internal: 134,
  summary: "溶食兽被香香的气味吸引到旅馆Ｚ来。它想要甜甜圈，试着给它吃一个吧。",
  process: ["给现身在旅馆Ｚ的溶食兽甜甜圈，让它满足。"],
  location: "旅馆Ｚ",
  unlockCondition: (
    <>
      接受了“
      <MissionLink
        category="异"
        index={6}
      />
      ”
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "34892613965",
};
