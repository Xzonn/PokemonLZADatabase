import { Spin } from "antd";
import L, { MapOptions } from "leaflet";
import { FC } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

import { MapProps } from "@/types";
import { MAP_CONFIG, getCoord } from "@/utils/map";

const DEFAULT_OPTIONS: Partial<MapOptions> = {
  minZoom: 0,
  maxZoom: MAP_CONFIG.maxZoom,
  crs: L.CRS.Simple,
  maxBounds: new L.LatLngBounds(L.latLng(0, 0), L.latLng(-MAP_CONFIG.boundaryHeight, MAP_CONFIG.boundaryWidth)),
  maxBoundsViscosity: 0.5,
  fullscreenControl: true,
};

export const Map: FC<MapProps> = ({
  children,
  center = [MAP_CONFIG.imageWidth, MAP_CONFIG.imageHeight],
  zoom = 0,
  loading,
}) => {
  const { imageWidth, tileSize, maxZoom } = MAP_CONFIG;

  return (
    <Spin spinning={loading}>
      <MapContainer
        className="map"
        center={getCoord(center)}
        zoom={zoom}
        {...DEFAULT_OPTIONS}
      >
        <TileLayer
          attribution="Z-A 数据库 | za.xzonn.top"
          path={({ x, y, z }: { x: number; y: number; z: number }) => {
            if (Math.min(x, y) < 0 || Math.max(x, y) >= Math.ceil(imageWidth / tileSize / (1 << (maxZoom - z)))) {
              return "data:image/gif;base64,R0lGODlhAQABAJEAAP///wAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
            } else {
              return `/assets/tiles/${z}/${x},${y}.webp`;
            }
          }}
          tileSize={tileSize}
          url="{path}"
        />
        {children}
      </MapContainer>
    </Spin>
  );
};
