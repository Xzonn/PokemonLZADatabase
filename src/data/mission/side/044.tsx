import { MissionDetail } from "@/types";
import { Link } from "@/utils";

export const information: MissionDetail = {
  index: 44,
  internal: 13,
  summary: "委托人表示，想用迷你冰的雪调制香水。到底能做出什么味道的香水呢？",
  process: ["把迷你冰加入同行队伍，带给委托人看。"],
  location: "春日大道 时尚服饰馆前",
  unlockCondition: (
    <>
      完成了<Link to="/side/010">副任务 010</Link>
    </>
  ),
};
