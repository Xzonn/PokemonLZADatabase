import { Spin } from "antd";
import L from "leaflet";
import "leaflet-fullscreen";
import { Component, createRef } from "react";

const MAP_CONFIG = {
  imageWidth: 4096,
  imageHeight: 4096,
  tileSize: 512,
  maxZoom: 3,
};

interface LayerInfo {
  name: string;
  group: L.FeatureGroup;
  show?: boolean;
}
type Layers = Record<string, LayerInfo>;

export interface LeafletMapProps {
  loading?: boolean;
  layers?: Layers;
  center?: [number, number];
  zoom?: number;
}

export class LeafletMap extends Component<LeafletMapProps> {
  mapContainer = createRef<HTMLDivElement>();
  mapInstance: L.Map | null = null;
  boundary: [number, number] = [0, 0];

  componentDidMount() {
    const { imageWidth, imageHeight, tileSize, maxZoom } = MAP_CONFIG;
    const [boundaryWidth, boundaryHeight] = [imageWidth / (1 << maxZoom), imageHeight / (1 << maxZoom)];
    const { layers = {}, center = [boundaryWidth / 2, boundaryHeight / 2], zoom = 0 } = this.props;
    this.boundary = [boundaryWidth, boundaryHeight];

    this.mapInstance = L.map(this.mapContainer.current!, {
      minZoom: 0,
      maxZoom: maxZoom,
      crs: L.CRS.Simple,
      maxBounds: new L.LatLngBounds(L.latLng(0, 0), L.latLng(-boundaryHeight, boundaryWidth)),
      maxBoundsViscosity: 0.5,
      fullscreenControl: true,
    }).setView(L.latLng(-center[1], center[0]), zoom);

    L.tileLayer("{path}", {
      path: function ({ x, y, z }: { x: number; y: number; z: number }) {
        if (Math.min(x, y) < 0 || Math.max(x, y) >= Math.ceil(imageWidth / tileSize / (1 << (maxZoom - z)))) {
          return "data:image/gif;base64,R0lGODlhAQABAJEAAP///wAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
        } else {
          return `/assets/tiles/${z}/${x},${y}.webp`;
        }
      },
      attribution: "Z-A 数据库 | za.xzonn.top",
      tileSize: tileSize,
    } as L.TileLayerOptions).addTo(this.mapInstance);
    Object.values(layers)
      .filter((layer) => layer.show)
      .forEach((layer) => {
        layer.group.addTo(this.mapInstance!);
      });
  }

  componentDidUpdate(prevProps: Readonly<LeafletMapProps>): void {
    const { layers = {}, center = [this.boundary[0] / 2, this.boundary[1] / 2], zoom = 0 } = this.props;
    if (this.mapInstance) {
      const {
        layers: prevLayers = {},
        center: prevCenter = [this.boundary[0] / 2, this.boundary[1] / 2],
        zoom: prevZoom = 0,
      } = prevProps;
      if (!Object.is(prevLayers, layers)) {
        Object.values(prevLayers)
          .filter((layer) => layer.show)
          .forEach((layer) => {
            layer.group.removeFrom(this.mapInstance!);
          });
        Object.values(layers)
          .filter((layer) => layer.show)
          .forEach((layer) => {
            layer.group.addTo(this.mapInstance!);
          });
      }
      if (center.some((item, index) => item !== prevCenter[index]) || zoom !== prevZoom) {
        this.mapInstance.setView(L.latLng(-center[1], center[0]), zoom);
      }
    }
  }

  componentWillUnmount() {
    if (this.mapInstance) {
      this.mapInstance.remove();
      this.mapInstance = null;
    }
  }

  render() {
    const { loading } = this.props;

    return (
      <Spin spinning={loading}>
        <div
          className="map"
          ref={this.mapContainer}
        />
      </Spin>
    );
  }
}

export default LeafletMap;
