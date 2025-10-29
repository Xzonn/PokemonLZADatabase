import L from "leaflet";
import "leaflet-fullscreen";
import { Component, createRef } from "react";

const MAP_CONFIG = {
  imageWidth: 4096,
  imageHeight: 4096,
  tileSize: 512,
  maxZoom: 3,
};

export class LeafletMap extends Component {
  mapContainer = createRef<HTMLDivElement>();
  mapInstance: L.Map | null = null;

  componentDidMount() {
    const { imageWidth, imageHeight, tileSize, maxZoom } = MAP_CONFIG;

    this.mapInstance = L.map(this.mapContainer.current!, {
      minZoom: 0,
      maxZoom: maxZoom,
      crs: L.CRS.Simple,
      maxBounds: new L.LatLngBounds(
        L.latLng(0, 0),
        L.latLng(-imageHeight / (1 << maxZoom), imageWidth / (1 << maxZoom)),
      ),
      maxBoundsViscosity: 0.5,
      fullscreenControl: true,
    }).setView(L.latLng(-imageHeight / (1 << maxZoom) / 2, imageWidth / (1 << maxZoom) / 2), 0);

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
  }

  componentWillUnmount() {
    if (this.mapInstance) {
      this.mapInstance.remove();
      this.mapInstance = null;
    }
  }

  render() {
    return (
      <div
        className="map"
        ref={this.mapContainer}
      />
    );
  }
}

export default LeafletMap;
