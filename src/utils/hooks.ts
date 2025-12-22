import { useRequest } from "ahooks";
import { message } from "antd";
import { useState } from "react";
import { useMap } from "react-leaflet";
import { useLocation } from "react-router-dom";

import { MAP_CENTER, getCoord } from "./map";
import { aegis } from "./monitor";

const onUseRequestError = (error: any) => {
  const errorMessage = `${error?.message || error}`;
  if (/Failed to fetch dynamically imported module: https?:\/\/[^/]+\/assets\//.test(errorMessage)) {
    message.error("资源文件加载失败，请尝试刷新页面。");
  } else {
    message.error(`数据加载失败: ${errorMessage}`);
    aegis.error(error);
  }
};

export const useImport = <T>(callback: () => Promise<T>, refreshDeps: any[] = [], ignoreError = false) => {
  const {
    data = null,
    loading,
    ...rest
  } = useRequest(callback, {
    refreshDeps,
    onError: ignoreError
      ? (error) => {
          if (error.message.includes("Unknown variable dynamic import")) {
            return;
          }

          onUseRequestError(error);
        }
      : onUseRequestError,
  });

  return [data, loading, rest] as [T | null, boolean, Omit<ReturnType<typeof useRequest>, "data" | "loading">];
};

interface IView {
  bounds?: [[number, number], [number, number]];
  center?: [number, number];
  zoom?: number;
}
export const useView = (imageSize = 4096) => {
  const map = useMap();
  const [view, setView] = useState<IView>({
    center: MAP_CENTER,
    zoom: 0,
  });

  const updateView = (newView: IView) => {
    if (
      view.bounds?.[0][0] != newView.bounds?.[0][0] ||
      view.bounds?.[0][1] != newView.bounds?.[0][1] ||
      view.bounds?.[1][0] != newView.bounds?.[1][0] ||
      view.bounds?.[1][1] != newView.bounds?.[1][1] ||
      view.center?.[0] != newView.center?.[0] ||
      view.center?.[1] != newView.center?.[1] ||
      view.zoom !== newView.zoom
    ) {
      if (newView.bounds) {
        map.fitBounds([getCoord(newView.bounds[0], imageSize), getCoord(newView.bounds[1], imageSize)]);
      } else if (newView.center) {
        map.setView(getCoord(newView.center, imageSize), newView.zoom);
      } else {
        map.setView(getCoord(MAP_CENTER, imageSize), newView.zoom);
      }
      setView(newView);
    }
  };
  return [view, updateView] as const;
};

export const useViewBounds = (data: { x: number; y: number }[], imageSize = 4096) => {
  const [, setView] = useView(imageSize);

  if (data.length === 1) {
    setView({ center: [data[0].x, data[0].y], zoom: 3 });
  } else if (data?.length > 1) {
    let [minX, minY, maxX, maxY] = [Infinity, Infinity, -Infinity, -Infinity];
    data.forEach((item) => {
      if (item.x < minX) minX = item.x;
      if (item.y < minY) minY = item.y;
      if (item.x > maxX) maxX = item.x;
      if (item.y > maxY) maxY = item.y;
    });
    setView({
      bounds: [
        [minX, minY],
        [maxX, maxY],
      ],
    });
  } else {
    setView({ center: MAP_CENTER, zoom: 0 });
  }
};

export const useLoadingAnchor = (loading: boolean[]) => {
  const [updated, setUpdated] = useState(false);
  const finished = loading.every((item) => !item);
  const { hash } = useLocation();
  if (finished && !updated) {
    setTimeout(() => {
      if (hash) {
        const element = document.querySelector(decodeURIComponent(hash));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 0);
    setUpdated(true);
  }
};
