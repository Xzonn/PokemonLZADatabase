import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 144,
  internal: 132,
  summary: "有人想通过卡娜莉发在社交平台上的照片找到长椅所在，并拍下同一角度的照片！……这是一个饱含热情的委托。",
  process: ["仔细观察委托人的照片，找到长椅的位置。", "仔细观察委托人的照片，找到能拍出相同角度的位置。"],
  location: "粉色广场",
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
  cid: "34914766295",
};
