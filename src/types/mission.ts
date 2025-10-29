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
  unlockCondition: string;
}
