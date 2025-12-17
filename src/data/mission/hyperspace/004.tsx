import { MissionDetail } from "@/types";
import { Link } from "@/utils";

export const information: MissionDetail = {
  index: 4,
  internal: 4,
  summary: "异次元密阿雷的调查暂停了。在等待乌羽联系的同时，将陪安馨儿和可尔妮游览密阿雷。",
  process: [
    "前往密阿雷美术馆。",
    "与安馨儿他们一起逛密阿雷美术馆。",
    "与安馨儿他们一起前往旭日咖啡馆。",
    "回到旅馆Ｚ。",
    "确认发出奇怪声响的作战会议室。",
  ],
  location: "",
  unlockCondition: (
    <>
      完成了<Link to="/hyperspace/003">异次元任务 003</Link>
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "25931945045",
};
