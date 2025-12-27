import { MissionLink } from "@/components";
import { MissionDetail } from "@/types";
import { Icon, Link } from "@/utils";

export const information: MissionDetail = {
  index: 188,
  internal: 143,
  summary: "乌羽有事找你。听说好像是一种叫做特殊搜寻的新系统完成了。听取详情，试用一下吧。",
  process: [
    "前往锈蚀组的事务所。",
    "完成异次元课题，积累特殊搜寻所需的调查点数。",
    "前往锈蚀组的事务所。",
    "与吉普索搭话，发动特殊搜寻。",
  ],
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
  cid: "34892547618",
  note: (
    <ul>
      <li>
        完成此任务后，每获得 25,000 搜查点数，可以前往锈蚀组事务所与
        <Icon
          className="icon-inline"
          name="吉普索"
        />
        <Link to="/tr/吉普索">吉普索</Link>搭话，发动特殊搜寻，地图上出现 5
        星级的异次元扭洞。特殊搜寻同一时间内只能出现一个。
      </li>
    </ul>
  ),
};
