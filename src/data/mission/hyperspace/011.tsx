import { FC } from "react";

import { ItemLink, MissionLink, PokemonLink, TrainerLink } from "@/components";
import { MissionDetail } from "@/types";
import { Link } from "@/utils";

export const information: MissionDetail = {
  index: 11,
  internal: 11,
  summary: "基于至今收集的数据，分析似乎取得了巨大的进展。解开异次元密阿雷的谜团，阻止现实与异次元的融合吧。",
  process: [
    "前往锈蚀组的事务所听取分析结果。",
    "寻找乌羽他们并与其会合。",
    "准备好甜甜圈，调查异次元密阿雷。",
    "回到旅馆Ｚ，等待乌羽。",
    "为挑战巨大的扭洞，制作梦魇螺旋甜甜圈，并告知乌羽你已准备就绪。",
    "捕捉创造出异次元密阿雷的宝可梦。",
    "捕捉创造出异次元密阿雷的达克莱伊。",
  ],
  location: "",
  unlockCondition: (
    <>
      完成了“
      <MissionLink
        category="异"
        index={10}
      />
      ”
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "34848702846",
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
        在异次元扭洞找到乌羽和
        <TrainerLink name="吉普索" />。
      </p>
      <p>
        调查地图上的
        <Link to="/异次元扭洞">异次元扭洞</Link>，完成调查课题。
      </p>
      <p>收集到 50,000 点调查点数后，接到乌羽的联络，前往旅馆Ｚ。</p>
      <p>
        制作梦魇螺旋甜甜圈，配方：
        <ItemLink name="异次元扁樱果" />
        ×3、
        <ItemLink name="异次元佛柑果" />
        ×3、
        <ItemLink name="异次元通通果" />
        ×1、
        <ItemLink name="异次元罗子果" />
        ×1。
      </p>
      <p>前往棱镜塔。</p>
      <p>
        进入特殊异次元扭洞，进入异次元密阿雷：噩梦新月岛，依次与
        <PokemonLink
          name="达克莱伊"
          level={200}
        />
        和失控进化的
        <PokemonLink
          name="达克莱伊"
          form={1}
          level={200}
        />
        对战。
      </p>
      <p>
        对战结束后，用任意精灵球收服
        <PokemonLink
          name="达克莱伊"
          level={85}
        />
        ，获得
        <ItemLink name="达克莱伊进化石" />。
      </p>
      <p>播放制作人员名单。</p>
      <p>
        “
        <MissionLink
          category="异"
          index={12}
        />
        ”开启。
      </p>
    </div>
  </>
);

export default Content;
