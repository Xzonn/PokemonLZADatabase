import { Card } from "antd";
import { FC } from "react";

import { ItemTable } from "@/components";
import { ItemFull } from "@/types";
import { Link, parseTSV } from "@/utils";

import rawAnoymous from "./2618-anonymous.txt?raw";
import rawQuasartico from "./2618-quasartico.txt?raw";
import { ItemFullDataByName } from "./detail";

const itemsQuasartico = parseTSV<ItemFull>(rawQuasartico, (dict) => ({
  ...ItemFullDataByName[dict["道具"]],
  unlockCondition: dict["条件"] ? (
    <>
      完成<Link to={`/main/${dict["条件"].padStart(3, "0")}`}>主任务 {dict["条件"].padStart(3, "0")}</Link>
    </>
  ) : undefined,
}));
const itemsAnonymous = parseTSV<ItemFull>(rawAnoymous, (dict) => ({
  ...ItemFullDataByName[dict["道具"]],
  unlockCondition: dict["道具"].endsWith("卡带") ? (
    <>
      完成<Link to="/hyperspace/012">异次元任务 012</Link>
    </>
  ) : undefined,
}));

const Content: FC = () => (
  <>
    <div className="section">
      <h2>作用</h2>
      <ul>
        <li>
          可在阔星公司前台右边的工作人员处兑换<Link to="/超级石一览">超级石</Link>等道具。
        </li>
        <li>
          完成<Link to="/main/037">主任务 037</Link>
          后，可在翡绿７号街区靠近１７号野生特区外围一处小巷的死角处的无名男性处兑换
          <Link to="/招式学习器一览">招式学习器</Link>等道具。
        </li>
        <li>可在锈蚀组事务所一楼右手边柜台处使用 5 个超级碎片清空一只宝可梦的全部基础点数。</li>
      </ul>
      <p>可以用来兑换的道具如下：</p>
      <div className="grid text-md gap-4 lg:grid-cols-2">
        <Card title="阔星公司前台工作人员">
          <ItemTable
            data={itemsQuasartico}
            headers={["道具", "超级碎片数量", "解锁条件"]}
          />
        </Card>
        <Card title="翡绿７号街区无名男性">
          <ItemTable
            data={itemsAnonymous}
            headers={["道具", "超级碎片数量", "解锁条件"]}
          />
        </Card>
      </div>
    </div>
  </>
);

export default Content;
