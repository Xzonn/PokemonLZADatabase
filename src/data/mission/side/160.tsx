import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 160,
  internal: 173,
  summary: "丑丑鱼和鲤鱼王同样属于“鱼宝可梦”这个分类。委托人想要丑丑鱼，听听她的委托内容吧。",
  process: ["把丑丑鱼送给委托人。"],
  location: "翡绿４号街区",
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
  cid: "25934894366",
  note: (
    <ul>
      <li>任务完成后，该地点附近开始出现野生的丑丑鱼。</li>
    </ul>
  ),
};
