import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 162,
  internal: 195,
  summary: "委托人在考虑找比警卫咚咚鼠还要更可靠的新警卫宝可梦。测试一下被列为候补首选的莫鲁贝可的实力吧。",
  process: ["与委托人对话，并与莫鲁贝可它们对战。"],
  location: "阔星公司门口",
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
  cid: "25934894375",
};
