import { FC } from "react";

import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 7,
  internal: 7,
  summary: "早餐时间已经过了，但琵鲁还是不想从房间里出来。头巾混混好像带来了什么信息，去房间里看看情况吧。",
  process: ["去旅馆Ｚ的２０３号客房看看琵鲁的情况。"],
  location: "",
  unlockCondition: (
    <>
      完成了“
      <MissionLink
        category="异"
        index={6}
      />
      ”
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "25931945183",
};

const Content: FC = () => (
  <>
    <div className="section">
      <h2>任务流程</h2>
      <p>前往２０３号客房。</p>
      <p>
        “
        <MissionLink
          category="异"
          index={8}
        />
        ”开启。
      </p>
    </div>
  </>
);

export default Content;
