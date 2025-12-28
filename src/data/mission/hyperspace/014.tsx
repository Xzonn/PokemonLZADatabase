import { FC } from "react";

import { ItemLink, MissionLink, PokemonLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 14,
  internal: 14,
  summary: "在靛蓝色扭洞深处检测到了盖欧卡。用特制食谱制作甜甜圈，去捕捉盖欧卡吧！",
  process: ["制作挑战靛蓝色扭洞所需的阿尔法蛋糕甜甜圈，与可尔妮他们会合。", "捕捉传说的宝可梦盖欧卡。"],
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
  cid: "34885667900",
};

const Content: FC = () => (
  <>
    <div className="section">
      <h2>任务流程</h2>
      <p>
        制作欧米伽蛋糕甜甜圈，配方：
        <ItemLink name="异次元霹霹果" />
        ×3、
        <ItemLink name="异次元莓榴果" />
        ×1、
        <ItemLink name="异次元福禄果" />
        ×3、
        <ItemLink name="异次元罗子果" />
        ×1。
      </p>
      <p>
        进入地图上的特殊异次元扭洞，进入异次元密阿雷：始源之海，依次与
        <PokemonLink
          name="盖欧卡"
          level={200}
        />
        和
        <PokemonLink
          name="盖欧卡"
          form={1}
          level={200}
        />
        对战。
      </p>
      <p>
        对战结束后，用任意精灵球收服
        <PokemonLink
          name="盖欧卡"
          level={80}
        />
        ，获得
        <ItemLink name="靛蓝色宝珠" />。
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
