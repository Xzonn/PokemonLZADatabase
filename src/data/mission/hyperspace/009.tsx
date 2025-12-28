import { FC } from "react";

import { ItemLink, MissionLink, PokemonLink, TrainerLink } from "@/components";
import { MissionDetail } from "@/types";
import { Link } from "@/utils";

export const information: MissionDetail = {
  index: 9,
  internal: 9,
  summary: "据说密阿雷市有可能会被异次元密阿雷吞没。究竟能否阻止不断膨胀的异次元密阿雷呢？",
  process: [
    "前往锈蚀组的事务所听取分析结果。",
    "准备好甜甜圈，调查异次元密阿雷。",
    "准备好用异次元树果做出的高级别甜甜圈，挑战危险的异次元。",
    "捕捉有失控超级进化反应的席多蓝恩。",
    "用宝可梦的招式命中奖励球。",
  ],
  location: "",
  unlockCondition: (
    <>
      完成了“
      <MissionLink
        category="异"
        index={8}
      />
      ”
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "25932535482",
  trainers: ["Ev_d05_0100", "Ev_d05_0100_01", "Ev_d05_0100_02", "Ev_d05_0100_01_strong", "Ev_d05_0100_02_strong"],
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
        在锈蚀组事务所，遇到
        <TrainerLink name="卡娜莉" />和<TrainerLink name="皙白" />
        ，和乌羽联手与卡娜莉和皙白对战（<Link to="#相关训练家">训练家数据</Link>，如果已完成 20
        场报酬战，则对手等级提升）。
      </p>
      <p>
        调查地图上的
        <Link to="/异次元扭洞">异次元扭洞</Link>，完成调查课题。
      </p>
      <p>收集到 28,000 点调查点数后，接到乌羽的联络，前往锈蚀组事务所。</p>
      <p>
        进入地图上的特殊异次元扭洞，进入异次元密阿雷：火焰地狱，与失控进化的
        <PokemonLink
          name="席多蓝恩"
          form={1}
          level={180}
        />
        对战。
      </p>
      <p>
        对战结束后，用任意精灵球收服
        <PokemonLink
          name="席多蓝恩"
          level={85}
        />
        ，获得
        <ItemLink name="席多蓝恩进化石" />
        、多个异次元树果和
        <ItemLink name="异次元黄油" />。
      </p>
      <p>任务结束后，甜甜圈使用的树果数量提升到最多 8 个。</p>
      <p>
        “
        <MissionLink
          category="异"
          index={10}
        />
        ”开启。
      </p>
    </div>
  </>
);

export default Content;
