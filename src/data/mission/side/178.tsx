import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 178,
  internal: 158,
  summary: "下水道的管道好像被巨大的宝可梦堵住了。如果不救出宝可梦，水不但无法流动，还会溢出来。",
  process: ["前往堵在水管的宝可梦所在的位置。", "巧妙地用宝可梦的招式命中为难的吃吼霸。"],
  location: "密阿雷下水道内",
  unlockCondition: (
    <>
      “
      <MissionLink
        category="异"
        index={11}
      />
      ”从异次元返回
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "25934894609",
};
