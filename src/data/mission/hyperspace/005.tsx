import { FC } from "react";

import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 5,
  internal: 5,
  summary: "作战会议室里本该空无一人，却突然传来了可疑的声响……莫非是谁藏在那里吗？谨慎地确认一下房间里面吧。",
  process: [],
  location: "",
  unlockCondition: (
    <>
      完成了“
      <MissionLink
        category="异"
        index={4}
      />
      ”
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "25931945146",
};

const Content: FC = () => (
  <>
    <div className="section">
      <h2>任务流程</h2>
      <p>推进对话。</p>
      <p>
        “
        <MissionLink
          category="异"
          index={6}
        />
        ”开启。
      </p>
    </div>
  </>
);

export default Content;
