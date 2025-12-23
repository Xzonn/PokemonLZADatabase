import { MissionDetail } from "@/types";
import { Link } from "@/utils";

export const information: MissionDetail = {
  index: 14,
  internal: 14,
  summary: "在靛蓝色扭洞深处检测到了盖欧卡。用特制食谱制作甜甜圈，去捕捉盖欧卡吧！",
  process: ["制作挑战靛蓝色扭洞所需的阿尔法蛋糕甜甜圈，与可尔妮他们会合。", "捕捉传说的宝可梦盖欧卡。"],
  location: "",
  unlockCondition: (
    <>
      <Link to="/hyperspace/012">异次元任务 012</Link> 获得 70000 点异次元点数后
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "34885667900",
};
