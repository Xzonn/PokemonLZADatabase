import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 136,
  internal: 156,
  summary: "面包店的善布拜托你带狗仔包散步。与狗仔包一起沿着平时的散步路线走一圈吧。",
  process: ["与狗仔包一起按平时的散步路线走一圈。", "与狗仔包一起回到委托人身边。"],
  location: "琼黄１１号街区",
  unlockCondition: (
    <>
      完成“
      <MissionLink
        category="副"
        index={120}
      />
      ”后
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "34892613271",
};
