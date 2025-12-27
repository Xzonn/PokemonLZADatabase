import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 161,
  internal: 175,
  summary: "委托人想帮凉脊龙交朋友，却无法开口与人搭话……去与１０号野生特区的训练家们搭话吧。",
  process: ["与１０号野生特区的训练家们对话。", "回到委托人的身边。"],
  location: "１０号野生特区",
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
  cid: "25934894497",
};
