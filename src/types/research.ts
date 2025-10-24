type ResearchDescription =
  | {
      description: string;
      rowSpan: number;
    }
  | {
      description: "";
      rowSpan: 0;
    };

export type Research = ResearchDescription & {
  index: number;
  name: string;
  point: number;
  count: number;
};

export interface ResearchReward {
  level: number;
  item: string;
  move: string | null;
  count: number;
}
