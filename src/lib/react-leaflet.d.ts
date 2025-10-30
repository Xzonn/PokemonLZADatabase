import "react-leaflet";

declare module "react-leaflet" {
  interface TileLayerProps {
    path: ({ x, y, z }: { x: number; y: number; z: number }) => string;
  }
}
