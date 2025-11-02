export interface LayerInfo {
  name: string;
  group: L.FeatureGroup;
  show?: boolean;
}

export type Layers = Record<string, LayerInfo>;

export interface MapProps {
  children?: React.ReactNode;
  center?: [number, number];
  zoom?: number;
  loading?: boolean;
}

interface PositionBasic {
  name: string;
  index: number;
}

export interface PositionWithPoint extends PositionBasic {
  x: number;
  y: number;
}

export interface PositionWithoutPoint extends PositionBasic {
  x: null;
  y: null;
}

export type Position = PositionWithPoint | PositionWithoutPoint;
