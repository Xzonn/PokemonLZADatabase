import { MissionDetail } from "@/types";
import { Link } from "@/utils";

export const information: MissionDetail = {
  index: 6,
  internal: 6,
  summary: "异次元密阿雷的调查正逐步推进。搜寻扭洞的精度随之提高，现在可以调查更高级别的异次元密阿雷了。",
  process: [
    "前往锈蚀组的事务所听取分析结果。",
    "准备好甜甜圈，调查异次元密阿雷。",
    "准备好用异次元树果做出的高级别甜甜圈，挑战危险的异次元。",
    "捕捉有失控超级进化反应的米立龙。",
    "用宝可梦的招式命中奖励球。",
  ],
  location: "",
  unlockCondition: (
    <>
      完成了<Link to="/hyperspace/005">异次元任务 005</Link>
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "25931944974",
};
