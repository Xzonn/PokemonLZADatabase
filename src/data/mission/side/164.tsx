import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 164,
  internal: 155,
  summary: "委托人希望有人能帮忙照看蓉粉区的售货亭。仔细听客人要买什么，收款时不要出错。",
  process: ["接受照看售货亭的委托。"],
  location: "南侧大道",
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
  cid: "25934894506",
};
