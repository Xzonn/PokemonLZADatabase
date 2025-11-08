import { SideMissionInformation } from "@/types";
import { Link } from "@/utils";

export const information: SideMissionInformation = {
  index: 78,
  internal: 44,
  name: "好啦鱿的墨真好闻",
  requester: "香琪",
  summary: "委托人想用好啦鱿的墨制作香水。到底能做出什么味道的香水呢？",
  process: ["把好啦鱿加入同行队伍，带给委托人看。"],
  prize: 2000,
  items: [
    {
      item: "大珍珠",
      number: 3,
    },
  ],
  location: "春日大道 时尚服饰馆前",
  unlockCondition: (
    <>
      完成了<Link to="/side/044">副任务 044</Link>
    </>
  ),
};
