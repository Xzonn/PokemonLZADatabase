import { MissionDetail } from "@/types";
import { Link } from "@/utils";

export const information: MissionDetail = {
  index: 5,
  internal: 5,
  summary: "作战会议室里本该空无一人，却突然传来了可疑的声响……莫非是谁藏在那里吗？谨慎地确认一下房间里面吧。",
  process: [],
  location: "",
  unlockCondition: (
    <>
      完成了<Link to="/hyperspace/004">异次元任务 004</Link>
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "25931945146",
};
