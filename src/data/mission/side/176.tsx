import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 176,
  internal: 186,
  summary: "极训咖啡馆的店员偷偷地告诉你，她获得了究极的咖啡豆。但相应地，价格也同样究极……",
  process: ["做好心理准备，喝下$１００万的咖啡。"],
  location: "极训咖啡馆",
  unlockCondition: (
    <>
      “
      <MissionLink
        category="异"
        index={11}
      />
      ”从异次元返回
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "25934894547",
};
