import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 137,
  internal: 159,
  summary: "在宝可梦中心工作的女孩蓓妮的委托是想用酷似精灵球的宝可梦来提高营业额。把哎呀球菇让给她吧。",
  process: ["把哎呀球菇送给委托人。"],
  location: "宝可梦中心：冬日大道",
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
  cid: "34914763950",
};
