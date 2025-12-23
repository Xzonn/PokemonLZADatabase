import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 132,
  internal: 172,
  summary: "我们是彼此命中注定的劲敌。红莲铠骑与苍炎刃鬼将赌上命运，在此较量！……来实现这场理想中的对战吧。",
  process: ["收下庆祝之铠或咒术之铠。", "只用１只红莲铠骑与委托人对战。", "只用１只苍炎刃鬼与委托人对战。"],
  location: "翡绿６号街区",
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
  cid: "34892612223",
};
