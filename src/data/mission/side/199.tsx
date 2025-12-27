import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 199,
  internal: 142,
  summary: "琵鲁想成为时尚设计师的梦想得不到家人的认可。他似乎已经放弃了说服家人。作为朋友，有没有能帮上忙的地方呢？",
  process: ["与琵鲁打宝可梦对战。"],
  location: "旅馆Ｚ",
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
  cid: "25935420546",
};
