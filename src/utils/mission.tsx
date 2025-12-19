import { MissionCategory } from "@/types";

export const getMissionIndex = (id: number) => (id > 0 ? id.toString().padStart(3, "0") : `EX${-id}`);

export const getMissionCategory = (category: MissionCategory): string => {
  switch (category) {
    case "主":
      return "主任务";
    case "副":
      return "副任务";
    case "异":
      return "异次元任务";
  }
};

export const getMissionDirectory = (category: MissionCategory): string => {
  switch (category) {
    case "主":
      return "main";
    case "副":
      return "side";
    case "异":
      return "hyperspace";
  }
};
