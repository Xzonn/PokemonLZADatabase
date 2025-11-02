import { FC, ReactNode } from "react";

export interface SideMission {
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
  unlockCondition: ReactNode;
}

export interface SideMissionInformation extends Omit<SideMission, "x" | "y" | "z"> {
  summary: string;
  process: string[];
  location: string;
}

export interface SideMissionFull {
  information: SideMissionInformation;
  default?: FC;
}
