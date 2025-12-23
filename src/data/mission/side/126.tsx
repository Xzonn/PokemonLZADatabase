import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 126,
  internal: 192,
  summary: "委托人是个摩托蜥行家，喜欢会提升移动速度的招式。战斗时注意不要被他执着的速度战法甩开。",
  process: ["在宝可梦对战中打赢委托人。"],
  location: "南侧大道",
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
  cid: "34892549649",
};
