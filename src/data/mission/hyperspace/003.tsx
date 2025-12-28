import { FC } from "react";

import { ItemLink, MissionLink, PokemonLink, TrainerLink } from "@/components";
import { MissionDetail } from "@/types";
import { Link } from "@/utils";

export const information: MissionDetail = {
  index: 3,
  internal: 3,
  summary: "旅馆Ｚ迎来安馨儿和可尔妮，变得热闹了起来。异次元密阿雷的调查似乎还会继续下去。",
  process: [
    "前往锈蚀组的事务所听取分析结果。",
    "准备好甜甜圈，调查异次元密阿雷。",
    "准备好用异次元树果做出的高级别甜甜圈，挑战危险的异次元。",
    "捕捉有失控超级进化反应的姆克鹰。",
    "用宝可梦的招式命中奖励球。",
  ],
  location: "锈蚀组事务所",
  unlockCondition: (
    <>
      完成了“
      <MissionLink
        category="异"
        index={2}
      />
      ”
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "25931356806",
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
      <p>收集到 10,000 点调查点数后，接到乌羽的联络，前往锈蚀组事务所。</p>
      <p>
        进入地图上的特殊异次元扭洞，进入异次元密阿雷：孤高狩猎场，与失控进化的
        <PokemonLink
          name="姆克鹰"
          form={1}
          level={120}
        />
        对战。
      </p>
      <p>
        对战结束后，用任意精灵球收服
        <PokemonLink
          name="姆克鹰"
          level={75}
        />
        ，获得
        <ItemLink name="姆克鹰进化石" />
        、多个异次元树果和
        <ItemLink name="高级黄油" />。
      </p>
      <p>任务结束后，甜甜圈使用的树果数量提升到最多 5 个。</p>
      <p>
        “
        <MissionLink
          category="异"
          index={4}
        />
        ”开启。
      </p>
    </div>
  </>
);

export default Content;
