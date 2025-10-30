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
