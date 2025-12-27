import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 173,
  internal: 147,
  summary: "挑战卡娜莉构思的白热化游戏，赤手空拳幸存者！不依靠宝可梦，只凭自身之力，不断避开宝可梦的攻击！",
  process: ["挑战赤手空拳幸存者。"],
  location: "木根工程内卡娜莉的房间",
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
  cid: "25934894542",
};
