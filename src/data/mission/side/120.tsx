import { FC } from "react";

import { ItemLink, MissionLink, PokemonLink, TrainerLink } from "@/components";
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
      完成了“
      <MissionLink
        category="主"
        index={37}
      />
      ”、购买了 DLC
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "25931354316",
  trainers: [
    "Ev_d00_1000_01",
    "Ev_d00_1000_02",
    "Ev_d00_1000_hono",
    "Ev_d00_1000_kusa",
    "Ev_d00_1000_mizu",
    "Ev_d00_1000_01_strong",
    "Ev_d00_1000_02_strong",
  ],
};

const Content: FC = () => (
  <>
    <div className="section">
      <h2>任务流程</h2>
      <p>
        完成“
        <MissionLink
          category="主"
          index={37}
        />
        ”且购买 DLC《超次元爆涌》后，可以在旅馆Ｚ顶楼找到安馨儿，接下本任务。
      </p>
      <p>
        前往蓉粉６号街区的面包店，和
        <TrainerLink name="盖伊" />/<TrainerLink name="塔霓" />
        联手与
        <TrainerLink name="古历" />和<TrainerLink name="塔拉刚" />
        对战（<Link to="#相关训练家">训练家数据</Link>，如果已完成 20 场报酬战，则对手等级提升）。
      </p>
      <p>
        获胜后，获得
        <ItemLink name="密阿雷黄油" />。
      </p>
      <p>
        返回旅馆Ｚ，可以与
        <TrainerLink name="安馨儿" />
        对话，用 3 个树果制作<Link to="/甜甜圈">甜甜圈</Link>。
      </p>
      <p>
        前往<Link to="/area/四季运河沿岸">四季运河沿岸</Link>，调查扭洞，让胡帕吃下甜甜圈，打开扭洞，前往异次元密阿雷。
      </p>
      <p>
        在异次元密阿雷与
        <PokemonLink
          name="猴怪"
          level={110}
        />
        ×5 对战。
      </p>
      <p>找到安馨儿，离开异次元密阿雷。</p>
      <p>
        “
        <MissionLink
          category="异"
          index={1}
        />
        ”开启。
      </p>
    </div>
  </>
);

export default Content;
