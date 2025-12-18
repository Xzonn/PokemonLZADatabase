import { MissionDetail } from "@/types";
import { Link } from "@/utils";

export const information: MissionDetail = {
  index: 10,
  internal: 10,
  summary: "正当准备入睡的时候，玳萝的声音响彻了旅馆Ｚ！是出了什么麻烦吗……？先去确认一下状况吧！",
  process: ["去旅馆Ｚ的２０４号客房看看玳萝的情况。"],
  location: "",
  unlockCondition: (
    <>
      完成了<Link to="/hyperspace/009">异次元任务 009</Link>
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "25932535489",
};
