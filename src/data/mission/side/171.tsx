import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 171,
  internal: 177,
  summary: "据说四季运河沿岸的下水道传来了不知道是谁的叫声。委托人说自己绝对不是被吓到了，但希望你能一起去调查。",
  process: ["通过四季运河沿岸的门进入下水道。", "寻找被关进迭失棺中的人。"],
  location: "四季运河沿岸的下水道门口",
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
  cid: "25934894431",
};
