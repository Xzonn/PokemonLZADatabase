import { SideMissionInformation } from "@/types";
import { Link } from "@/utils";

export const information: SideMissionInformation = {
  index: 116,
  name: "秀出冰雪巨龙的实力吧！",
  requester: "琪琪",
  summary: "女孩正要用零花钱购买鳍之化石。然而她哥哥却强烈推荐颚之化石。",
  process: ["只用１只冰雪巨龙在对战中打赢委托人的哥哥。"],
  prize: 1000,
  items: [
    {
      item: "神奇糖果",
      number: 3,
    },
    {
      item: "果汁牛奶",
      number: 1,
    },
  ],
  location: "秋日大道 石头馆前",
  unlockCondition: (
    <>
      完成了<Link to="/side/027">副任务 027</Link>
    </>
  ),
};
