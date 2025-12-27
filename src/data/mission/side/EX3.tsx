import { ItemLink, MissionLink } from "@/components";
import { MissionDetail } from "@/types";
import { Icon, Link } from "@/utils";

export const information: MissionDetail = {
  index: -3,
  internal: 203,
  summary: "玛琪艾儿联系你，说在车站前发现了释放惊人能量的异次元扭洞。究竟是什么在等待你呢？",
  process: ["与在密阿雷南站前等待的玛琪艾儿会合。", "与玛琪艾儿对话，进入大屏幕中的异次元。"],
  location: "旅馆Ｚ",
  unlockCondition: (
    <>
      接受了“
      <MissionLink
        category="异"
        index={1}
      />
      ”
    </>
  ),
  bvid: "BV1azqaBiEi2",
  cid: "25935420490",
  note: (
    <ul>
      <li>
        要解锁此任务，需要先在
        <Icon
          className="icon-inline"
          name="塔拉刚"
        />
        <Link to="/tr/塔拉刚">塔拉刚</Link>处购买
        <ItemLink name="卡娜莉面包" />
        ，然后在翡绿３号街区楼顶用卡娜莉面包与男孩交换
        <ItemLink name="噼里啪啦糖果" />。
      </li>
      <li>
        获得噼里啪啦糖果后，在旅馆Ｚ与
        <Icon
          className="icon-inline"
          name="安馨儿"
        />
        安馨儿对话，可以获得等离子闪电甜甜圈的食谱。
      </li>
      <li>
        推荐树果：
        <ItemLink name="异次元佛柑果" />
        ×3、
        <ItemLink name="异次元棱瓜果" />
        ×2、
        <ItemLink name="异次元霹霹果" />
        ×2、
        <ItemLink name="异次元草蚕果" />
        ×1
      </li>
    </ul>
  ),
};
