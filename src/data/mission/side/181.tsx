import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 181,
  internal: 166,
  summary: "在异次元密阿雷，来电伍的卡娜莉与塔拉刚再次向你发起了２ｖｓ２的挑战！和沐净共战，获得胜利吧！",
  process: ["在宝可梦对战中打赢来电伍。"],
  location: "１４号野生特区内的异次元扭洞",
  unlockCondition: (
    <>
      完成了“
      <MissionLink
        category="异"
        index={11}
      />
      ”、“
      <MissionLink
        category="副"
        index={151}
      />
      ”
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "25934894553",
};
