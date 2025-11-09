interface IPositionBasic {
  name: string;
  index: number;
}

export interface IPositionWithPoint extends IPositionBasic {
  x: number;
  y: number;
}

export interface IPositionWithoutPoint extends IPositionBasic {
  x: null;
  y: null;
}

export type IPosition = IPositionWithPoint | IPositionWithoutPoint;

export interface IMapPosition extends IPositionWithPoint {
  link: string | null;
  icon: string;
}

export interface IMapFilter {
  layers?: Set<string>;
  index?: number;
}
