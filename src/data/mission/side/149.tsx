import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 149,
  internal: 131,
  summary: "贰流餐馆正在策划一场有关超辣菜品的特别活动。使用狠辣椒的招式辣椒精华让这场活动获得圆满成功吧！",
  process: ["把学会了辣椒精华的狠辣椒加入同行队伍，然后告诉委托人。", "给桌上的菜品撒上辣椒精华，满足所有顾客。"],
  location: "秋日大道",
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
  cid: "25934240436",
};
