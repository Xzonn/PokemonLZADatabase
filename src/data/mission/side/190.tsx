import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 190,
  internal: 146,
  summary:
    "马斯卡托年幼的女儿想和他要一只在卡洛斯地区很稀有的宝可梦谜拟丘，这让马斯卡托很头痛。去替马斯卡托捉住谜拟丘吧。",
  process: ["把谜拟丘送给马斯卡托。"],
  location: "阔星公司",
  unlockCondition: (
    <>
      完成了“
      <MissionLink
        category="异"
        index={12}
      />
      ”
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "25935420520",
};
