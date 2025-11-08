import { SideMissionInformation } from "@/types";
import { Link } from "@/utils";

export const information: SideMissionInformation = {
  index: 32,
  internal: 87,
  name: "好想亲眼看看超级恰雷姆！",
  requester: "然彤",
  summary: "为了想出新点子，身为彩色隐形眼镜设计师的委托人想看超级恰雷姆。在对战中让它超级进化吧。",
  process: ["让恰雷姆超级进化，在对战中打赢委托人。"],
  prize: 5000,
  items: [
    {
      item: "果汁牛奶",
      number: 2,
    },
    {
      item: "经验糖果Ｍ",
      number: 1,
    },
  ],
  location: "春日大道 美发沙龙对面",
  unlockCondition: (
    <>
      完成了<Link to="/side/031">副任务 031</Link>
    </>
  ),
};
