import { MissionCategory } from "./mission";

export interface IDonutButter {
  name: string;
  count: number;
  missionCategory: MissionCategory;
  missionIndex: number;
  pokemon: string | null;
}

export interface IDountFlavor {
  name: string;
  flavor: string;
  effect: string;
  boosts: [string, string, string, string];
}

export interface IDonutBerry {
  name: string;
  index: number;
  sweet: number;
  spicy: number;
  sour: number;
  bitter: number;
  fresh: number;
  level: number;
  calories: number;
}
