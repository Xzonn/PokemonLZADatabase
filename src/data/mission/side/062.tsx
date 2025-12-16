import { MissionDetail } from "@/types";
import { Link } from "@/utils";

export const information: MissionDetail = {
  index: 62,
  internal: 32,
  summary: "委托人想修剪出更多多丽米亚的造型。向她的搭档飞天螳螂展示招式，帮忙提升技术吧。",
  process: ["用宝可梦的招式飞叶快刀击中人偶。"],
  location: "琼黄６号街区 南东",
  unlockCondition: (
    <>
      完成了<Link to="/side/047">副任务 047</Link>
    </>
  ),
};
