import { FC } from "react";

import { MissionLink, TrainerLink } from "@/components";
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
      完成了“
      <MissionLink
        category="异"
        index={1}
      />
      ”
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "25931354897",
  trainers: ["Ev_d02_0010_01", "Ev_d02_0010_02", "Ev_d02_0010", "Ev_d02_0010_01_strong", "Ev_d02_0010_02_strong"],
};

const Content: FC = () => (
  <>
    <div className="section">
      <h2>任务流程</h2>
      <p>
        <TrainerLink name="沐净" />和<TrainerLink name="春紫" />
        一起出现在旅馆Ｚ。和
        <TrainerLink name="琵鲁" />
        联手与沐净和春紫对战（<Link to="#相关训练家">训练家数据</Link>，如果已完成 20 场报酬战，则对手等级提升）。
      </p>
      <p>
        “
        <MissionLink
          category="异"
          index={3}
        />
        ”开启。
      </p>
    </div>
  </>
);

export default Content;
