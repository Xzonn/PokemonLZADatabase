import { ItemLink, MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 193,
  internal: 200,
  summary: "在银行入口附近有一只不常见的神秘宝可梦。为了不给客人造成困扰，委托人希望你能想想办法。",
  process: [
    "捕捉出现在银行的美录坦。",
    "调查出现在银行的异次元扭洞。",
    "与异次元中的少女谈话。",
    "从异次元密阿雷逃出。",
  ],
  location: "榴红１号街区",
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
  cid: "25935420522",
  note: (
    <ul>
      <li>
        本作中美录坦无法进化为美录梅塔，任务中美录坦可以用任意精灵球捕获，而美录梅塔是流程中自动获得的，必定为普通
        <ItemLink name="精灵球" />。
      </li>
    </ul>
  ),
};
