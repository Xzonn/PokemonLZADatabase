import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 166,
  internal: 193,
  summary: "艺人莫方今天也在和搭档踏冰人偶特训表演。通过宝可梦对战尽情欣赏他们拿手的模仿艺术吧。",
  process: ["在宝可梦对战中打赢委托人。"],
  location: "翡绿３号街区",
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
  cid: "25934894389",
};
