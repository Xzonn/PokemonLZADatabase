import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 183,
  internal: 168,
  summary: "在异次元密阿雷，锈蚀组的乌羽与吉普索再次向你发起了２ｖｓ２的挑战！和马斯卡托共战，获得胜利吧！",
  process: ["在宝可梦对战中打赢锈蚀组。"],
  location: "",
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
        index={153}
      />
      ”
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "25934894618",
};
