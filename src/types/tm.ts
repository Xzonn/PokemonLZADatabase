import { Move } from "./move";

export interface TM {
  index: number;
  name: string;
  tmName: string;
  researchLevel: number | null;
  sideMission: number | null;
  location: string | null;
  x: number | null;
  y: number | null;
  z: number | null;
}

export interface TMFull extends TM, Move {}
