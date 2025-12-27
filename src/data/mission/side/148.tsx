import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 148,
  internal: 126,
  summary:
    "据说凑齐几项条件之后，墓地的墓碑就会动来动去。虽是孤身一人来墓地，墓头墓脑惊魂记，但还是去确认传闻是否属实吧。",
  process: ["晚上只带１只同行宝可梦，在安息墓地的北门念咒语，然后进入墓地。"],
  location: "北侧大道",
  unlockCondition: (
    <>
      “
      <MissionLink
        category="异"
        index={6}
      />
      ”在锈蚀组事务所听完了对话
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "25934240292",
};
