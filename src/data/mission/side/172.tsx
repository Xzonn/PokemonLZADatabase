import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 172,
  internal: 171,
  summary: "你将以帮手的身份参加打击鬼部队和投摔鬼部队的团体战。选择要加入哪方阵营，并且取得胜利吧！",
  process: ["只用打击鬼或者投摔鬼其中１只参加比赛。"],
  location: "正义社道场",
  unlockCondition: (
    <>
      “
      <MissionLink
        category="异"
        index={9}
      />
      ”击败了卡娜莉和皙白
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "25934894541",
};
