import { SideMissionInformation } from "@/types";
import { Link } from "@/utils";

export const information: SideMissionInformation = {
  index: 62,
  name: "目标是技术高超的多丽米亚造型师",
  requester: "秀简",
  summary: "委托人想修剪出更多多丽米亚的造型。向她的搭档飞天螳螂展示招式，帮忙提升技术吧。",
  process: ["用宝可梦的招式飞叶快刀击中人偶。"],
  prize: 1600,
  items: [
    {
      item: "活力碎片",
      number: 3,
    },
    {
      item: "经验糖果Ｍ",
      number: 3,
    },
  ],
  location: "琼黄６号街区 南东",
  unlockCondition: (
    <>
      完成了<Link to="/side/047">副任务 047</Link>
    </>
  ),
};
