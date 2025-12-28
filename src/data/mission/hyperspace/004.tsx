import { FC } from "react";

import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

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
      完成了“
      <MissionLink
        category="异"
        index={3}
      />
      ”
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "25931945045",
};

const Content: FC = () => (
  <>
    <div className="section">
      <h2>任务流程</h2>
      <p>前往密阿雷美术馆和旭日咖啡馆。</p>
      <p>返回旅馆Ｚ。</p>
      <p>
        “
        <MissionLink
          category="异"
          index={5}
        />
        ”开启。
      </p>
    </div>
  </>
);

export default Content;
