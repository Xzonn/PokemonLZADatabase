import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 91,
  internal: 62,
  summary: "深爱龙属性的ＭＳＢＣ成员发来了宝可梦对战的委托。活用属性相克来战斗吧。",
  process: ["在宝可梦对战中打赢委托人。"],
  location: "翡绿３号街区 对战场东侧",
  unlockCondition: (
    <>
      完成“
      <MissionLink
        category="主"
        index={30}
      />
      ”后
    </>
  ),
  bvid: "BV1pK4UzoEoF",
  cid: "34892154279",
};
