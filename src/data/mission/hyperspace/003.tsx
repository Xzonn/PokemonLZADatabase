import { MissionDetail } from "@/types";
import { Link } from "@/utils";

export const information: MissionDetail = {
  index: 3,
  internal: 3,
  summary: "旅馆Ｚ迎来安馨儿和可尔妮，变得热闹了起来。异次元密阿雷的调查似乎还会继续下去。",
  process: [
    "前往锈蚀组的事务所听取分析结果。",
    "准备好甜甜圈，调查异次元密阿雷。",
    "准备好用异次元树果做出的高级别甜甜圈，挑战危险的异次元。",
    "捕捉有失控超级进化反应的姆克鹰。",
    "用宝可梦的招式命中奖励球。",
  ],
  location: "锈蚀组事务所",
  unlockCondition: (
    <>
      完成了<Link to="/hyperspace/002">异次元任务 002</Link>
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "25931356806",
};
