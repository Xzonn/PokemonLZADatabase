import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 194,
  internal: 201,
  summary: "在打不开的精灵球中，封印着幻之宝可梦。与茉蜜姬合作将它从球中释放，再用新的球重新捕捉吧！",
  process: ["与茉蜜姬对话，挑战解放波尔凯尼恩。"],
  location: "宝可梦研究所３楼",
  unlockCondition: (
    <>
      完成了“
      <MissionLink
        category="异"
        index={12}
      />
      ”
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "25935420371",
};
