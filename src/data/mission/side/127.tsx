import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 127,
  internal: 152,
  summary: "新员工魔尼尼在邮局首次工作。它要到桥的另一边的邮筒那里去收集信件。悄悄地照看它到最后吧。",
  process: [
    "与委托人搭话，让魔尼尼开始工作。",
    "与前往邮筒所在地的魔尼尼保持不近不远的距离，一边照看一边追踪它。",
    "不要跟丢前往邮筒所在地的魔尼尼。",
  ],
  location: "翡绿１号街区",
  unlockCondition: (
    <>
      “
      <MissionLink
        category="异"
        index={1}
      />
      ”初次击败了可尔妮
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "34892549894",
};
