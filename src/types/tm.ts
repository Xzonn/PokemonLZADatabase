import { Move } from "./move";

export interface TM {
  index: number;
  name: string;
  move: string;
  researchLevel: number | null;
  sideMission: number | null;
  location: string | null;
}

export interface TMMove extends TM, Move {
  tmName: string;
}
