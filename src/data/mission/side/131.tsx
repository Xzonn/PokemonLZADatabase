import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 131,
  internal: 135,
  summary: "榴红区的井盖上画的宝可梦是什么呢？把觉得是正确答案的宝可梦带给孔蓓儿看，并为她解答吧。",
  process: ["捉住榴红区的井盖上所描绘的宝可梦，带给委托人看。"],
  location: "１号野生特区门口",
  unlockCondition: (
    <>
      “
      <MissionLink
        category="异"
        index={3}
      />
      ”在锈蚀组事务所听完了对话
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "34892611731",
};
