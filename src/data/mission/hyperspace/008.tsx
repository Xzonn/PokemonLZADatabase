import { FC } from "react";

import { ItemLink, MissionLink, PokemonLink, TrainerLink } from "@/components";
import { MissionDetail } from "@/types";
import { Link } from "@/utils";

export const information: MissionDetail = {
  index: 8,
  internal: 8,
  summary: "棱镜塔上空的巨大扭洞似乎正在逐渐扩大它所带来的影响。在危险波及到密阿雷市之前，必须解开异次元的谜团。",
  process: [
    "前往锈蚀组的事务所听取分析结果。",
    "准备好甜甜圈，调查异次元密阿雷。",
    "前往有失控超级进化反应的秀丽世大酒店。",
    "准备好用异次元树果做出的高级别甜甜圈，挑战危险的异次元。",
    "捕捉有失控超级进化反应的超能妙喵。",
    "用宝可梦的招式命中奖励球。",
  ],
  location: "",
  unlockCondition: (
    <>
      完成了“
      <MissionLink
        category="异"
        index={7}
      />
      ”
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "25932535581",
  trainers: ["Ev_d04_1100_01", "Ev_d04_1100_02", "Ev_d04_1100", "Ev_d04_1100_01_strong", "Ev_d04_1100_02_strong"],
};

const Content: FC = () => (
  <>
    <div className="section">
      <h2>任务流程</h2>
      <p>
        在旅馆Ｚ接到
        <TrainerLink name="乌羽" />
        的联络，前往锈蚀组事务所。
      </p>
      <p>
        调查地图上的
        <Link to="/异次元扭洞">异次元扭洞</Link>，完成调查课题。
      </p>
      <p>收集到 23,000 点调查点数后，接到乌羽的联络，前往锈蚀组事务所。</p>
      <p>
        前往秀丽世大酒店，遇到
        <TrainerLink name="由紫" />和<TrainerLink name="古丽兹" />
        ，和
        <TrainerLink name="玳萝" />
        联手与由紫和古丽兹对战（<Link to="#相关训练家">训练家数据</Link>，如果已完成 20 场报酬战，则对手等级提升）。
      </p>
      <p>
        进入地图上的特殊异次元扭洞，进入异次元密阿雷：千里眼之域，与失控进化的
        <PokemonLink
          name="超能妙喵"
          form={3}
          level={150}
        />
        对战。
      </p>
      <p>
        对战结束后，用任意精灵球收服
        <PokemonLink
          name="超能妙喵"
          level={75}
        />
        ，获得
        <ItemLink name="超能妙喵进化石" />
        、多个异次元树果和
        <ItemLink name="大师黄油" />。
      </p>
      <p>任务结束后，甜甜圈使用的树果数量提升到最多 7 个。</p>
      <p>
        “
        <MissionLink
          category="异"
          index={9}
        />
        ”开启。
      </p>
    </div>
  </>
);

export default Content;
