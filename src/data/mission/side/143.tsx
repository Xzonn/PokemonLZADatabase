import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 143,
  internal: 128,
  summary: "据说如果能战胜绯盈，就可以从她提供的３只样子不同的喵喵中选１只，当作特别的奖赏。",
  process: ["在宝可梦对战中打赢委托人。", "从３只喵喵中挑选１只。"],
  location: "榴红７号街区",
  unlockCondition: (
    <>
      完成了“
      <MissionLink
        category="异"
        index={3}
      />
      ”
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "34914765480",
};
