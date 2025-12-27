import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 169,
  internal: 129,
  summary: "英俊咖啡馆的店员奥武想要能够协助工作的英俊的宝可梦，那就是爱管侍。",
  process: ["把爱管侍送给委托人。"],
  location: "英俊咖啡馆",
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
  cid: "25934894395",
};
