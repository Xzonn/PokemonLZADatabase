import { ItemLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: -2,
  internal: 120,
  summary: "弗拉达利研究所旧址的装置起了反应，曾经作为研究对象的危险宝可梦被解锁了。紧急命令！捕获超梦！",
  process: ["捕捉超梦。"],
  location: "弗拉达利研究所",
  unlockCondition: (
    <>
      获得了
      <ItemLink name="超梦进化石Ｘ" />和<ItemLink name="超梦进化石Ｙ" />
    </>
  ),
  bvid: "BV1pK4UzoEoF",
  cid: "25930963295",
};
