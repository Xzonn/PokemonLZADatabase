import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 121,
  internal: 123,
  summary: "亲眼见过头目之后，内心深受震撼的吕犹锻炼好宝可梦后回来了。见证那份巨大的牵绊吧！",
  process: ["在宝可梦对战中打赢委托人。"],
  location: "榴红６号街区",
  unlockCondition: (
    <>
      完成“
      <MissionLink
        category="副"
        index={120}
      />
      ”后
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "34892546901",
};
