import { SideMissionInformation } from "@/types";
import { Link } from "@/utils";

export const information: SideMissionInformation = {
  index: 103,
  internal: 61,
  summary: "据说其实在密阿雷市有个多丽米亚联盟，联盟的四天王正在等待挑战。将４人全部打败，称霸联盟吧。",
  process: ["只用多丽米亚在宝可梦对战中打赢多丽米亚联盟四天王。", "在宝可梦对战中打赢多丽米亚联盟冠军。"],
  location: "琼黄６号街区 南东",
  unlockCondition: (
    <>
      完成了<Link to="/side/087">副任务 087</Link>
    </>
  ),
};
