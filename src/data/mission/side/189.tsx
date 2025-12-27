import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 189,
  internal: 198,
  summary:
    "在异次元中遇见一对兄妹，他们带着会在空中四处飞翔的传说的宝可梦，拉帝欧斯与拉帝亚斯。与想要较量的２人对战吧。",
  process: ["与在异次元相遇的神秘兄妹对战。"],
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
  cid: "34914766803",
};
