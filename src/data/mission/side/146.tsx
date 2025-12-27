import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 146,
  internal: 157,
  summary: "栖息在８号野生特区的宝可梦的样子好像有些奇怪。为了查明原因，需要去特区里面调查一番。",
  process: ["调查８号野生特区的状况。"],
  location: "黄色广场",
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
  cid: "25934240318",
};
