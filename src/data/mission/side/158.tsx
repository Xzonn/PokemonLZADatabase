import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 158,
  internal: 183,
  summary: "龚诰是有用的公告牌的设计师。城市里要有怎样的公告牌才能为人们的生活提供便利呢？把自己知道的信息分享给他吧。",
  process: ["回答第１个问题。", "回答第２个问题。", "回答第３个问题。"],
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
  cid: "25934240493",
};
