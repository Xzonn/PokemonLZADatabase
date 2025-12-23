import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 133,
  internal: 176,
  summary: "有传闻说如果只带１只携带了大葱的大葱鸭在夜路上行走，会遭到某人的袭击……把犯人引出来，好好教训一顿吧！",
  process: ["在夜晚只带上１只携带了大葱的大葱鸭前往榴红７号街区的巷子里。"],
  location: "宝可梦中心：琼黄",
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
  cid: "34914763218",
};
