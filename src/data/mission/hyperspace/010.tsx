import { FC } from "react";

import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 10,
  internal: 10,
  summary: "正当准备入睡的时候，玳萝的声音响彻了旅馆Ｚ！是出了什么麻烦吗……？先去确认一下状况吧！",
  process: ["去旅馆Ｚ的２０４号客房看看玳萝的情况。"],
  location: "",
  unlockCondition: (
    <>
      完成了“
      <MissionLink
        category="异"
        index={9}
      />
      ”
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "25932535489",
};

const Content: FC = () => (
  <>
    <div className="section">
      <h2>任务流程</h2>
      <p>前往２０４号客房。</p>
      <p>
        “
        <MissionLink
          category="异"
          index={11}
        />
        ”开启。
      </p>
    </div>
  </>
);

export default Content;
