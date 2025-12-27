import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 130,
  internal: 139,
  summary: "艾谢卓正在撰写推理小说。他总觉得登场角色不够对味。于是便委托（主角）将宝可梦们带来供自己参考。",
  process: ["按照委托人的要求，凑齐同行的宝可梦。"],
  location: "罗雀咖啡馆",
  unlockCondition: (
    <>
      完成了“
      <MissionLink
        category="副"
        index={129}
      />
      ”
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "25935484298",
};
