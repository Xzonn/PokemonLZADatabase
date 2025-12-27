import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 180,
  internal: 182,
  summary: "委托人的宝可梦“花宝鼻”是个野丫头，总是一转眼就不见。将跑进６号野生特区的花宝鼻带回委托人身边吧。",
  process: ["在６号野生特区寻找“花宝鼻”。"],
  location: "琼黄１２号街区",
  unlockCondition: (
    <>
      “
      <MissionLink
        category="异"
        index={11}
      />
      ”从异次元返回
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "25934894552",
};
