import { SideMissionInformation } from "@/types";

export const information: SideMissionInformation = {
  index: 1,
  internal: 2,
  name: "巨大的掘掘兔",
  requester: "吕犹",
  summary: "委托人在野生特区外的巷子里目击到了巨大的掘掘兔。和委托人一起前往目击地点所在的巷子吧。",
  process: ["前往委托人目击到掘掘兔的巷子。"],
  prize: 400,
  items: [
    {
      item: "美味之水",
      number: 2,
    },
  ],
  location: "榴红６号街区",
  unlockCondition: "在“主任务05 仰望棱镜塔的城市”中听完玛琪艾儿对副任务的说明后",
};
