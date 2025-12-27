import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 139,
  internal: 124,
  summary: "以前交换过宝可梦的２人组队前来挑战。同时对付号称最强的２只雷丘，取得胜利吧！",
  process: ["与最强的雷丘拍档对战。"],
  location: "宫廷廊街 进入异次元扭洞",
  unlockCondition: (
    <>
      “
      <MissionLink
        category="异"
        index={3}
      />
      ”在锈蚀组事务所听完了对话、完成了“
      <MissionLink
        category="副"
        index={108}
      />
      ”
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "34914764334",
};
