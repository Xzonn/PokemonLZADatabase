import { MissionDetail } from "@/types";
import { Link } from "@/utils";

export const information: MissionDetail = {
  index: -2,
  internal: 120,
  summary: "弗拉达利研究所旧址的装置起了反应，曾经作为研究对象的危险宝可梦被解锁了。紧急命令！捕获超梦！",
  process: ["捕捉超梦。"],
  location: "弗拉达利研究所",
  unlockCondition: (
    <>
      获得了<Link to="/i/超梦进化石Ｘ">超梦进化石Ｘ</Link>和<Link to="/i/超梦进化石Ｙ">超梦进化石Ｙ</Link>
    </>
  ),
  bvid: "BV1pK4UzoEoF",
  cid: "25930963295",
};
