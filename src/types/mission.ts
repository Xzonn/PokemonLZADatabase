import { FC, ReactNode } from "react";

export type MissionCategory = "主" | "副" | "异";

export interface MissionSummary {
  category: MissionCategory;
  index: number;
  name: string;
  requester: string;
  prize: number;
  items: {
    item: string;
    number: number;
  }[];
  pokemon: {
    name: string;
    level: number;
  }[];
  x: number;
  y: number;
  isHyperspace: boolean;
}

export interface MissionDetail {
  index: number;
  internal: number;
  summary: string;
  process: string[];
  location: string;
  unlockCondition: ReactNode;
  bvid?: string;
  cid?: string;
  note?: ReactNode;
  trainers?: string[];
}

export interface MissionFull {
  information: MissionDetail;
  default?: FC;
}
