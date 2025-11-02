import { SideMissionInformation } from "@/types";
import { Link } from "@/utils";

export const information: SideMissionInformation = {
  index: 115,
  name: "《狂暴颚龙怪颚龙》",
  requester: "导演",
  summary: "有位电影导演正在拍摄怪兽片。把要在重要场景登场的怪颚龙借给他吧。",
  process: ["把怪颚龙加入同行队伍，帮忙拍摄电影。"],
  prize: 5500,
  items: [
    {
      item: "攻击增强剂",
      number: 10,
    },
  ],
  location: "秋日大道 精灵球馆前",
  unlockCondition: (
    <>
      完成了<Link to="/side/105">副任务 105</Link>
    </>
  ),
};
