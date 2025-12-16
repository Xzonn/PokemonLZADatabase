import { MissionDetail } from "@/types";
import { Link } from "@/utils";

export const information: MissionDetail = {
  index: 2,
  internal: 2,
  summary: "悠闲的清晨时光随着剧烈的开门声戛然而止……！看来有必要让情绪激动的春紫冷静下来。",
  process: ["在旅馆Z的庭院与春紫＆沐净对战。"],
  location: "旅馆Z",
  unlockCondition: (
    <>
      完成了<Link to="/hyperspace/001">异次元任务 001</Link>
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "25931354897",
};
