import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 159,
  internal: 160,
  summary: "刚给电音婴的点心转眼间就不见了。到底消失去哪里了呢？帮忙一起寻找点心吧。",
  process: ["与委托人对话，开始搜索点心。", "追上逃进廊街的狡小狐。", "捕捉狡小狐。"],
  location: "浦蓝８号街区",
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
  cid: "25934240606",
};
