import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 182,
  internal: 167,
  summary: "在异次元密阿雷，正义社的皙白与沐净再次向你发起了２ｖｓ２的挑战！和春紫共战，获得胜利吧！",
  process: ["在宝可梦对战中打赢正义社。"],
  location: "密阿雷下水道内的异次元扭洞",
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
        index={152}
      />
      ”
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "25934894555",
};
