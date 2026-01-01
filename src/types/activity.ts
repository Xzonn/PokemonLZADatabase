import { IItemReward } from "./item";

export interface ILevelReward {
  levels: string;
  items: IItemReward[];
}

export interface ISeasonReward {
  season: number;
  url: string;
  startDate: string;
  endDate: string;
  promotionRewards: ILevelReward[];
  seasonRewards: ILevelReward[];
}
