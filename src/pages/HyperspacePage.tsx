import { FC, Fragment, useEffect } from "react";

import { HyperspaceWildZoneNavigation, MissionLink } from "@/components";
import { DEFAULT_TITLE, Link } from "@/utils";

const HyperspacePage: FC = () => {
  useEffect(() => {
    document.title = `异次元密阿雷 - ${DEFAULT_TITLE}`;
  }, []);

  return (
    <Fragment key="hyperspace-page">
      <div className="section">
        <h1>异次元密阿雷</h1>
      </div>

      <div className="section">
        <h2>概述</h2>
        <p>
          购买 DLC《超次元爆涌》并完成“
          <MissionLink
            category="异"
            index={1}
          />
          ”后，地图上会随机出现异次元扭洞。可以使用在旅馆Ｚ制作的甜甜圈进入异次元。
        </p>
        <p>异次元中的对战与通常的对战有以下几点不同：</p>
        <ul>
          <li>
            宝可梦的实际等级会受到异次元空间的影响而提高。对于野生宝可梦或训练家的宝可梦，提高等级受异次元星级的影响。对于玩家的宝可梦，提高等级受
            <Link to="/甜甜圈">甜甜圈</Link>的影响。
          </li>
          <li>对战不会获得经验值。</li>
        </ul>
        <p>异次元扭洞的种类主要有以下几种：</p>
        <ul>
          <li>
            野生异次元：可以在这里遇到各种宝可梦。每个扭洞会在地图上显示 3
            种宝可梦，表示扭洞中可能会出现的宝可梦。此外，未显示在地图上的宝可梦也可能会出现，例如宝可梦的进化前形态、相关联的宝可梦（例如
            <Link to="/p/吃吼霸">吃吼霸</Link>和<Link to="/p/米立龙">米立龙</Link>
            ）等。对于多重属性的野生异次元，地图上会随机显示 3 种宝可梦，实际遇到的宝可梦分布会同时包含两种属性的分布。
          </li>
          <li>特殊五星野生异次元：可以在这里遇到传说的宝可梦。地图上会显示为问号。</li>
          <li>
            对战异次元：类似于野生特区，会与随机生成的训练家进行对战。其中，一些强力的训练家会以红色的全息影像出现，他们被称为“头目训练家”，使用的宝可梦是头目宝可梦，获胜之后可以获得
            <Link to="/i/银色王冠">银色王冠</Link>、<Link to="/i/金色王冠">金色王冠</Link>
            等奖励。与快递员样子的训练家对战后也可以获得奖励。
          </li>
          <li>失控超级进化：可以与失控超级进化的宝可梦重新对战。</li>
          <li>特殊异次元：主要是异次元任务、副任务的发生地点。</li>
        </ul>
        <p>
          在野生异次元和对战异次元中，可能会出现发光的隐藏道具，通常可以拾取到
          <Link to="/i/索财灵的硬币">索财灵的硬币</Link>
          。此外，还有一些精灵球形状的物体，用宝可梦的招式攻击后可以获得异次元树果等奖励。如果完成了 3
          项调查任务，地图上还会出现 1
          个金色的精灵球，攻击后可以获得更好的奖励。可以遇到传说的宝可梦的特殊五星野生异次元中不会出现精灵球形状的物体。
        </p>
        <p>
          在主线剧情中，完成调查任务可以推进剧情。在完成了“
          <MissionLink
            category="异"
            index={12}
          />
          ”后，会自动解锁“
          <MissionLink index={188} />
          ”，之后每获得 25,000 调查点数，可以前往锈蚀组事务所二楼与<Link to="/tr/吉普索">吉普索</Link>
          对话，在地图上添加一个 5 星的异次元扭洞。
        </p>
      </div>

      <div className="section">
        <h2>野生异次元</h2>
        <HyperspaceWildZoneNavigation />
      </div>

      <div className="section">
        <h2>对战异次元</h2>
        <div className="text-center">
          关于对战异次元中的对手，参见：<Link to="/对战异次元">对战异次元</Link>。
        </div>
      </div>

      {/* <div className="section">
        <h2>可以获取的道具</h2>
        <h3>闪光道具</h3>

        <h3>小型精灵球</h3>

        <h3>大型精灵球</h3>

        <h3>金色精灵球</h3>

        <h3>快递员</h3>

        <h3>宝可梦收藏家</h3>

        <h3>富家少爷</h3>

        <h3>千金小姐</h3>

        <h3>头目训练家</h3>
      </div> */}
    </Fragment>
  );
};

export default HyperspacePage;
