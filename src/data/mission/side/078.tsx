import { MissionDetail } from "@/types";
import { Link } from "@/utils";

export const information: MissionDetail = {
  index: 78,
  internal: 44,
  summary: "委托人想用好啦鱿的墨制作香水。到底能做出什么味道的香水呢？",
  process: ["把好啦鱿加入同行队伍，带给委托人看。"],
  location: "春日大道 时尚服饰馆前",
  unlockCondition: (
    <>
      完成了<Link to="/side/044">副任务 044</Link>
    </>
  ),
};
