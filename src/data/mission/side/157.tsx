import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 157,
  internal: 178,
  summary: "委托人的胖可丁讨厌洗澡。一给它洗澡就生气，因此装作打宝可梦对战，趁机用泡沫光线给它洗澡吧！",
  process: ["在与委托人的对战中用泡沫光线命中胖可丁。"],
  location: "",
  unlockCondition: (
    <>
      “
      <MissionLink
        category="异"
        index={8}
      />
      ”在锈蚀组事务所听完了对话
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "25934240393",
};
