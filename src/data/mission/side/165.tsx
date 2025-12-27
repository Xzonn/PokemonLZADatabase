import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 165,
  internal: 180,
  summary: "有劫匪闯入了密阿雷美术馆！……你将扮演劫匪，参加上述设定的警卫训练。突破警备，直奔目标物品吧！",
  process: ["与委托人对话，参加警卫训练。", "盗走密阿雷美术馆２楼的古代神奥人的服装。"],
  location: "密阿雷美术馆门前",
  unlockCondition: (
    <>
      “
      <MissionLink
        category="异"
        index={8}
      />
      ”在锈蚀组事务所听完了对话
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "25934894425",
};
