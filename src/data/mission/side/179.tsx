import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 179,
  internal: 179,
  summary: "据说委托人的宝可梦“噬沙堡爷”对自己的抗打能力很自豪。你也来挑战一下看看能否在３０秒内击败它吧。",
  process: ["与委托人的噬沙堡爷对战，在３０秒内取胜。"],
  location: "",
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
  cid: "25934894549",
};
