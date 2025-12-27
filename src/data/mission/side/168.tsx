import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 168,
  internal: 150,
  summary: "“梦梦蚀好梦”是一间为常做噩梦的人所设的沙龙。我们将改善您的睡眠质量。欢迎每一位顾客前来体验。",
  process: ["向顾客的缠红鹤使出宝可梦的招式催眠术。", "向顾客的缠红鹤使出宝可梦的招式食梦。"],
  location: "",
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
  cid: "25934894430",
};
