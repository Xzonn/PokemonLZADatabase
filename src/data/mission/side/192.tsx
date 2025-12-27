import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 192,
  internal: 197,
  summary: "委托人想找人确认某个都市传说的真相。解读犹如暗号的文章秘密，揭开小孩子的亡灵的真面目吧！",
  process: ["闪耀巨影之梢与红白圆形之绘画交叠时。以拳叩地者……这段话是指什么？"],
  location: "",
  unlockCondition: (
    <>
      完成了“
      <MissionLink
        category="异"
        index={12}
      />
      ”
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "25935420361",
  note: (
    <ul>
      <li>需要在太阳快要落山时调查榴红１号街区的对战场地。</li>
    </ul>
  ),
};
