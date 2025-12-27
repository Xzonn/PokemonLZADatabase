import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 150,
  internal: 174,
  summary: "蓝鸦从伽勒尔地区一路飞越海峡来到密阿雷市。它似乎正在寻找某个人，线索只有一条围巾。",
  process: ["让时尚服饰馆的亚莎美看看脏围巾。", "在艾特瓦鲁学校寻找蓝鸦在找的人。", "与斐托的宝可梦对战。"],
  location: "浦蓝３号街区",
  unlockCondition: (
    <>
      “
      <MissionLink
        category="异"
        index={6}
      />
      ”在锈蚀组事务所听完了对话
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "25934240446",
};
