import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 191,
  internal: 196,
  summary: "委托人愿意用在别处得不到的“卡带”来与超级碎片交换。据说收齐４种，他就会告诉你特别的事情。",
  process: ["收集４种卡带，带给委托人看。", "使用任务的导航功能前往指定的地点。", "调查指定地点的异次元扭洞。"],
  location: "",
  unlockCondition: (
    <>
      完成了“
      <MissionLink
        category="异"
        index={12}
      />
      ”
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "34892614021",
};
