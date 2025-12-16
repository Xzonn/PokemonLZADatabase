import { MissionDetail } from "@/types";
import { Link } from "@/utils";

export const information: MissionDetail = {
  index: 120,
  internal: 122,
  summary: "带着胡帕的少女安馨儿有一个委托，内容是希望帮她制作甜甜圈。其中缘由究竟是……？",
  process: [
    "在蓉粉６号街区的面包店获取黄油。",
    "带着黄油回到安馨儿的身边。",
    "让安馨儿制作甜甜圈。",
    "在四季运河边与安馨儿会合。",
    "寻找安馨儿，在奇特的空间前行。",
    "前往安馨儿所在的地方。",
  ],
  location: "旅馆Z 顶楼",
  unlockCondition: (
    <>
      完成了<Link to="/main/037">主任务 037</Link>
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "25931354316",
};
