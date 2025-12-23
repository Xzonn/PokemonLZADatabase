import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 140,
  internal: 125,
  summary: "在异次元遇到的男人将一封信交付给了你。似乎这封信的收件人是艾特瓦鲁学校的校长……？",
  process: ["把信送给艾特瓦鲁学校的校长。", "在木根工程谈话。", "在宝可梦对战中打赢塔拉刚。"],
  location: "４号野生特区 进入异次元扭洞",
  unlockCondition: (
    <>
      完成“
      <MissionLink
        category="副"
        index={120}
      />
      ”后
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "34914764543",
};
