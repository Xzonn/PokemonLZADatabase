import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 185,
  internal: 170,
  summary: "在异次元密阿雷，新闪焰队的古历与古丽兹再次向你发起了２ｖｓ２的挑战！和吉普索共战，获得胜利吧！",
  process: ["在宝可梦对战中打赢新闪焰队。"],
  location: "弗拉达利研究所地下２楼的异次元扭洞",
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
        index={155}
      />
      ”
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "25934894563",
};
