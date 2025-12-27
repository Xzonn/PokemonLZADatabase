import { ItemLink, MissionLink } from "@/components";
import { MissionDetail } from "@/types";

export const information: MissionDetail = {
  index: 167,
  internal: 133,
  summary: "游戏制作人多连安似乎很了解多边兽。据说只要和他交换各自的多边兽，就能从他那里得知一些有趣的事。",
  process: ["用自己的多边兽和委托人的多边兽交换。"],
  location: "浦蓝６号街区",
  unlockCondition: (
    <>
      “
      <MissionLink
        category="异"
        index={9}
      />
      ”击败了卡娜莉和皙白
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "25934894529",
  note: (
    <ul>
      <li>
        对方的多边兽携带了
        <ItemLink name="升级数据" />
        ，因此在交换后会进化为多边兽２型。
      </li>
      <li>
        如果送出的多边兽也携带了
        <ItemLink name="升级数据" />
        ，交换后同样会进化为多边兽２型。
      </li>
      <li>
        任务完成后，地图上会出现 1 星级的异次元扭洞，进入后会遇到多连安，他会赠送
        <ItemLink name="可疑补丁" />。
      </li>
    </ul>
  ),
};
