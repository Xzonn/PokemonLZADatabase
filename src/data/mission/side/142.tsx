import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 142,
  internal: 153,
  summary: "帕生咖啡店发生了咖啡变咸的罕见事件！屋顶有只很奇妙的宝可梦，看起来很可疑，真相究竟是……？",
  process: ["追上原本在咖啡店屋顶的宝可梦。"],
  location: "帕生咖啡店",
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
  cid: "34914765615",
};
