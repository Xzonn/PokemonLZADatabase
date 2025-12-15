import { FC, ReactNode } from "react";

export interface SideMissionSummary {
  index: number;
  name: string;
  requester: string;
  prize: number;
  items: {
    item: string;
    number: number;
  }[];
  x: number;
  y: number;
  z: number;
}

export interface SideMissionInformation {
  index: number;
  internal: number;
  summary: string;
  process: string[];
  location: string;
  unlockCondition: ReactNode;
}

export interface SideMissionFull {
  information: SideMissionInformation;
  default?: FC;
}
