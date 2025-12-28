import { FC } from "react";

import { ItemLink, MissionLink, PokemonLink } from "@/components";
import { MissionDetail } from "@/types";
import { Link } from "@/utils";

export const information: MissionDetail = {
  index: 12,
  internal: 12,
  summary: "异次元的谜团已经解开，但安馨儿原本的目标——传说的宝可梦仍未找到。看来还需要继续调查。",
  process: [
    "去和乌羽谈谈关于安馨儿在异次元看到的宝可梦一事。",
    "准备好甜甜圈，调查异次元密阿雷。",
    "在新咖啡与乌羽会合。",
    "带着丰缘的粗盐，回到安馨儿的身边。",
    "捉住２只传说的宝可梦。它们分别是藏身在朱红色扭洞的烈空坐，与藏身在靛蓝色扭洞的盖欧卡。",
    "回到旅馆Z，与安馨儿谈话。",
    "准备好甜甜圈，调查异次元密阿雷。",
    "回到旅馆Z。",
    "制作挑战翠绿色扭洞所需的德尔塔蛋糕甜甜圈，与可尔妮他们会合。",
    "捕捉传说的宝可梦烈空坐。",
  ],
  location: "",
  unlockCondition: (
    <>
      完成了“
      <MissionLink
        category="异"
        index={11}
      />
      ”
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "34885534788",
};

const Content: FC = () => (
  <>
    <div className="section">
      <h2>任务流程</h2>
      <p>前往锈蚀组事务所。</p>
      <p>
        调查地图上的
        <Link to="/异次元扭洞">异次元扭洞</Link>，完成调查课题。
      </p>
      <p>收集到 70,000 点调查点数后，接到乌羽的联络，前往新咖啡。</p>
      <p>
        “
        <MissionLink
          category="异"
          index={13}
        />
        ”和“
        <MissionLink
          category="异"
          index={14}
        />
        ”开启。
      </p>
      <p>
        收服
        <PokemonLink name="烈空坐" />和<PokemonLink name="盖欧卡" />
        后，回到旅馆Ｚ，与安馨儿谈话。
      </p>
      <p>
        调查地图上的
        <Link to="/异次元扭洞">异次元扭洞</Link>，完成调查课题。
      </p>
      <p>收集到 100,000 点调查点数后，接到乌羽的联络，前往旅馆Ｚ。</p>
      <p>
        制作德尔塔蛋糕甜甜圈，配方：
        <ItemLink name="异次元刺耳果" />
        ×5、
        <ItemLink name="异次元扁樱果" />
        ×2、
        <ItemLink name="异次元灯浆果" />
        ×1。
      </p>
      <p>
        进入地图上的特殊异次元扭洞，进入异次元密阿雷：长空之柱，依次与
        <PokemonLink
          name="烈空坐"
          level={200}
        />
        和
        <PokemonLink
          name="烈空坐"
          form={1}
          level={200}
        />
        对战。
      </p>
      <p>
        对战结束后，用任意精灵球收服
        <PokemonLink
          name="烈空坐"
          level={85}
        />
        。
      </p>
    </div>
  </>
);

export default Content;
