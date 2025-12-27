import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 141,
  internal: 181,
  summary: "在某异次元密阿雷中，超级好胜毛蟹正在互相打斗……正可谓是超级蟹斗！在事情闹大之前解决争执吧。",
  process: ["阻止超级好胜毛蟹它们的超级蟹斗。"],
  location: "翡绿７号街区 进入异次元扭洞",
  unlockCondition: (
    <>
      “
      <MissionLink
        category="异"
        index={3}
      />
      ”在锈蚀组事务所听完了对话
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "34914765230",
};
