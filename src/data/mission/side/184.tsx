import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 184,
  internal: 169,
  summary: "在异次元密阿雷，ＭＳＢＣ的由紫与春紫再次向你发起了２ｖｓ２的挑战！和由紫共战，获得胜利吧……？",
  process: ["在宝可梦对战中打赢ＭＳＢＣ。"],
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
        index={154}
      />
      ”
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "25934894560",
};
