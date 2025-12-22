import { Spin } from "antd";
import L, { MapOptions } from "leaflet";
import "leaflet-fullscreen";
import { FC, PropsWithChildren, useCallback } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

import { MAP_CONFIG, getCoord } from "@/utils/map";

const DEFAULT_OPTIONS: Partial<MapOptions> = {
  minZoom: 0,
  maxZoom: MAP_CONFIG.maxZoom,
  crs: L.CRS.Simple,
  maxBounds: new L.LatLngBounds(L.latLng(0, 0), L.latLng(-MAP_CONFIG.tileSize, MAP_CONFIG.tileSize)),
  maxBoundsViscosity: 0.5,
  fullscreenControl: true,
};

interface IProps {
  imageSize?: number;
  mapKey?: string;
  center?: [number, number];
  zoom?: number;
  loading?: boolean;
}

export const BasicMap: FC<IProps & PropsWithChildren> = ({
  children,
  imageSize = 4096,
  mapKey = "t1",
  center = [imageSize, imageSize],
  zoom = 0,
  loading = false,
}) => {
  const getPath = useCallback(
    ({ x, y, z }: { x: number; y: number; z: number }) => {
      if (Math.min(x, y) < 0 || Math.max(x, y) >= 1 << z) {
        return "data:image/gif;base64,R0lGODlhAQABAJEAAP///wAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
      } else {
        return `/assets/tiles/${mapKey}/${z}/${x},${y}.webp`;
      }
    },
    [mapKey],
  );

  return (
    <Spin spinning={loading}>
      <MapContainer
        className={`map map-${mapKey}`}
        center={getCoord(center, imageSize)}
        zoom={zoom}
        {...DEFAULT_OPTIONS}
      >
        <TileLayer
          attribution="Z-A 数据库 | za.xzonn.top"
          path={getPath}
          tileSize={MAP_CONFIG.tileSize}
          url="{path}"
        />
        {children}
      </MapContainer>
    </Spin>
  );
};
