import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";
import { Icon, Link } from "@/utils";

export const information: MissionDetail = {
  index: 187,
  internal: 145,
  summary:
    "为了寻找曾经对战过的训练家，玛斗莎四处旅行。她要找的似乎是一名毒藻龙行家，这个人是否就在密阿雷的某个地方呢？",
  process: ["听取委托人的说明，去找你想到的那个人吧。"],
  location: "密阿雷南站前",
  unlockCondition: (
    <>
      完成了“
      <MissionLink
        category="异"
        index={11}
      />
      ”、“
      <MissionLink
        category="副"
        index={119}
      />
      ”
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "25935420211",
  note: (
    <ul>
      <li>
        需要前往秀丽世大酒店２楼与
        <Icon
          className="icon-inline"
          name="春紫"
        />
        <Link to="/tr/春紫">春紫</Link>对话，触发 2 vs 2 对战（主角 + 玛斗莎 vs 由紫 + 春紫）。
      </li>
    </ul>
  ),
};
