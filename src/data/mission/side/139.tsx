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
      完成“
      <MissionLink
        category="副"
        index={108}
      />
      ”、“
      <MissionLink
        category="副"
        index={120}
      />
      ”后
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "34914764334",
};
