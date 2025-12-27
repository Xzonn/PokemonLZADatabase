import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 175,
  internal: 188,
  summary: "委托人决心要在初次约会中顺利完成爱的告白，但对聊天似乎没有自信，帮忙让气氛热络起来吧。",
  process: ["让委托人的首次约会大获成功。"],
  location: "开拍咖啡馆",
  unlockCondition: (
    <>
      “
      <MissionLink
        category="异"
        index={11}
      />
      ”从异次元返回
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "25934894545",
  note: (
    <ul>
      <li>问题的答案依次是：坏心眼宝可梦、为了好玩、移花接木。</li>
    </ul>
  ),
};
