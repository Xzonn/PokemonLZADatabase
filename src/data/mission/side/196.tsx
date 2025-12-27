import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 196,
  internal: 202,
  summary: "刚发现惩戒之壶，就检测到了似乎与胡帕有关的异次元扭洞。这是偶然吗？还是……？",
  process: ["探测出了令人在意的反应，调查那里的异次元扭洞。", "胡帕因惩戒之壶而变得安分。去看看它的情况。"],
  location: "旅馆Ｚ",
  unlockCondition: (
    <>
      完成了“
      <MissionLink
        category="异"
        index={12}
      />
      ”
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "25935420436",
};
