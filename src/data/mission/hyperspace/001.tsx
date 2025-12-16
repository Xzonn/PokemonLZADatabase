import { MissionDetail } from "@/types";
import { Link } from "@/utils";

export const information: MissionDetail = {
  index: 1,
  internal: 1,
  summary: "正在思考追赶安馨儿时误入的奇妙的空间是什么的时候……收到了来自乌羽的召唤。",
  process: [
    "响应乌羽的召唤，前往锈蚀组的事务所。",
    "准备好甜甜圈，去调查异次元扭洞。",
    "准备好甜甜圈，调查异次元密阿雷。",
    "前往锈蚀组的事务所听取分析结果。",
    "使用超级进化，战胜可尔妮。",
    "准备好用异次元树果做出的高级别甜甜圈，挑战危险的异次元。",
    "捕捉有失控超级进化反应的阿勃梭鲁。",
    "用宝可梦的招式命中奖励球。",
  ],
  location: "锈蚀组事务所",
  unlockCondition: (
    <>
      完成了<Link to="/side/120">副任务 120</Link>
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "25931354755",
};
