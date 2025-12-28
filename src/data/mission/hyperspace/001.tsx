import { FC } from "react";

import { ItemLink, MissionLink, PokemonLink, TrainerLink } from "@/components";
import { MissionDetail } from "@/types";
import { Link } from "@/utils";

export const information: MissionDetail = {
  index: 1,
  internal: 1,
  summary: "正在思考追赶安馨儿时误入的奇妙的空间是什么的时候……收到了来自乌羽的召唤。",
  process: [
    "响应乌羽的召唤，前往锈蚀组的事务所。",
    "准备好甜甜圈，去调查异次元扭洞。",
    "准备好甜甜圈，调查异次元密阿雷。",
    "前往锈蚀组的事务所听取分析结果。",
    "使用超级进化，战胜可尔妮。",
    "准备好用异次元树果做出的高级别甜甜圈，挑战危险的异次元。",
    "捕捉有失控超级进化反应的阿勃梭鲁。",
    "用宝可梦的招式命中奖励球。",
  ],
  location: "锈蚀组事务所",
  unlockCondition: (
    <>
      完成了“
      <MissionLink
        category="副"
        index={120}
      />
      ”
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "25931354755",
  trainers: ["Ev_d01_2100"],
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
        返回旅馆Ｚ，可以与
        <TrainerLink name="安馨儿" />
        对话，用树果继续制作<Link to="/甜甜圈">甜甜圈</Link>。
      </p>
      <p>
        接到
        <TrainerLink name="茉蜜姬" />
        的联络，图鉴中添加异次元图鉴，并且增加了新的<Link to="/茉蜜姬调查">茉蜜姬调查</Link>。
      </p>
      <p>
        调查地图上的
        <Link to="/异次元扭洞">异次元扭洞</Link>，完成调查课题。
        在异次元扭洞的精灵球可以获得异次元树果等道具，地面上还可以捡到
        <ItemLink name="索财灵的硬币" />。
      </p>
      <p>收集到 7000 点调查点数后，接到乌羽的联络，前往锈蚀组事务所。</p>
      <p>
        在乌羽的问题中选择所有的训练家后，
        <TrainerLink name="可尔妮" />
        出现，与她对战（<Link to="#相关训练家">训练家数据</Link>，必须在对战中使用超级进化）。
      </p>
      <p>
        进入地图上的特殊异次元扭洞，进入异次元密阿雷：灾祸之地，与失控进化的
        <PokemonLink
          name="阿勃梭鲁"
          form={2}
          level={105}
        />
        对战。
      </p>
      <p>
        对战结束后，用任意精灵球收服
        <PokemonLink
          name="阿勃梭鲁"
          level={75}
        />
        ，获得
        <ItemLink name="阿勃梭鲁进化石Ｚ" />
        、多个异次元树果和
        <ItemLink name="超级黄油" />。
      </p>
      <p>任务结束后，甜甜圈使用的树果数量提升到最多 4 个。</p>
      <p>
        “
        <MissionLink
          category="异"
          index={2}
        />
        ”开启。
      </p>
    </div>
  </>
);

export default Content;
