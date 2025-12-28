import { FC } from "react";

import { ItemLink, MissionLink, PokemonLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 13,
  internal: 13,
  summary: "在朱红色扭洞深处检测到了固拉多。用特制食谱制作甜甜圈，去捕捉固拉多吧！",
  process: ["制作挑战朱红色扭洞所需的欧米伽蛋糕甜甜圈，与可尔妮他们会合。", "捕捉传说的宝可梦固拉多。"],
  location: "",
  unlockCondition: (
    <>
      “
      <MissionLink
        category="异"
        index={12}
      />
      ”获得 70,000 点异次元点数后
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "34885665056",
};

const Content: FC = () => (
  <>
    <div className="section">
      <h2>任务流程</h2>
      <p>
        制作欧米伽蛋糕甜甜圈，配方：
        <ItemLink name="异次元莓榴果" />
        ×3、
        <ItemLink name="异次元莲蒲果" />
        ×1、
        <ItemLink name="异次元刺耳果" />
        ×1、
        <ItemLink name="异次元洛玫果" />
        ×3。
      </p>
      <p>
        进入地图上的特殊异次元扭洞，进入异次元密阿雷：终结之地，依次与
        <PokemonLink
          name="固拉多"
          level={200}
        />
        和
        <PokemonLink
          name="固拉多"
          form={1}
          level={200}
        />
        对战。
      </p>
      <p>
        对战结束后，用任意精灵球收服
        <PokemonLink
          name="固拉多"
          level={80}
        />
        ，获得
        <ItemLink name="朱红色宝珠" />。
      </p>
      <p>
        继续完成“
        <MissionLink
          category="异"
          index={14}
        />
        ”和“
        <MissionLink
          category="异"
          index={12}
        />
        ”。
      </p>
    </div>
  </>
);

export default Content;
