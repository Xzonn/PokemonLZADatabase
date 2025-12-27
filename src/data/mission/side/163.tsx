import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 163,
  internal: 136,
  summary: "我们想给不起眼的街道取个朗朗上口的名字……！用你的意见结束３人之间无休止的讨论吧。",
  process: ["决定街道的名字。"],
  location: "蓉粉８号街区",
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
  cid: "25934894377",
};
