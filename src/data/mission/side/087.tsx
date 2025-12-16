import { MissionDetail } from "@/types";
import { Link } from "@/utils";

export const information: MissionDetail = {
  index: 87,
  internal: 33,
  summary: "委托人想修剪出更多更多多丽米亚的造型。向她的搭档飞天螳螂展示招式，帮忙提升技术吧。",
  process: ["用宝可梦的招式精神利刃击中人偶。"],
  location: "琼黄区６号街区",
  unlockCondition: (
    <>
      完成了<Link to="/side/062">副任务 062</Link>“主任务30 争取达到Ｂ级”开始时
    </>
  ),
};
