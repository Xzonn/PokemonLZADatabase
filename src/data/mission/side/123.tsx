import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 123,
  internal: 190,
  summary: "有的招式需要蓄力到极限再一举释放攻击。与会使用这种有点特别的招式的委托人打宝可梦对战吧。",
  process: ["在宝可梦对战中打赢委托人。"],
  location: "翡绿４号街区",
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
  cid: "34892549134",
};
