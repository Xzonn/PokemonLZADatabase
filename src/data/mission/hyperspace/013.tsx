import { MissionDetail } from "@/types";
import { Link } from "@/utils";

export const information: MissionDetail = {
  index: 13,
  internal: 13,
  summary: "在朱红色扭洞深处检测到了固拉多。用特制食谱制作甜甜圈，去捕捉固拉多吧！",
  process: ["制作挑战朱红色扭洞所需的欧米伽蛋糕甜甜圈，与可尔妮他们会合。", "捕捉传说的宝可梦固拉多。"],
  location: "",
  unlockCondition: (
    <>
      <Link to="/hyperspace/012">异次元任务 012</Link> 获得 70000 点异次元点数后
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "34885665056",
};
