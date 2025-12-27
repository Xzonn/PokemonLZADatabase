import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 135,
  internal: 187,
  summary: "卡拉卡拉孤零零地伫立着，竟然是在帮忙做街头问卷调查。不管怎么拒绝都推辞不了……只好认真地配合问卷调查了。",
  process: [],
  location: "牵绊咖啡馆旁边",
  unlockCondition: (
    <>
      “
      <MissionLink
        category="异"
        index={3}
      />
      ”在锈蚀组事务所听完了对话
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "34892612916",
};
