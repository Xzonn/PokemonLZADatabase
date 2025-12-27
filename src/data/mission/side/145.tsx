import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 145,
  internal: 130,
  summary: "委托人说前几天有个外地来的人搬到了隔壁。因为不知道对方是个怎样的人而感到不安，所以希望请人帮忙打听状况。",
  process: [
    "与邻居谈话。",
    "把邻居说的话转达给委托人。",
    "把委托人说的话转达给邻居。",
    "把邻居说的话转达给委托人。",
    "把委托人说的话转达给邻居。",
    "把邻居说的话转达给委托人。",
  ],
  location: "琼黄６号街区",
  unlockCondition: (
    <>
      完成了“
      <MissionLink
        category="异"
        index={3}
      />
      ”
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "25934240306",
};
