import { useUpdateEffect } from "ahooks";
import { Button, Switch } from "antd";
import classNames from "classnames";
import { divIcon } from "leaflet";
import { FC, Fragment, PropsWithChildren, ReactNode, useMemo, useState } from "react";
import { Marker, Popup } from "react-leaflet";

import { IMapFilter, IMapPosition } from "@/types";
import { Icon, Link, MAP_CENTER, getCoord, useImport, useView } from "@/utils";

import { BasicMap } from "./BasicMap";

interface IMapLayerProps {
  data: IMapPosition[];
}

const MapLayer: FC<IMapLayerProps> = ({ data }) => {
  const [, setView] = useView();

  if (data.length === 1) {
    setView({ center: [data[0].x, data[0].y], zoom: 2 });
  } else {
    setView({ center: MAP_CENTER, zoom: 0 });
  }

  return data.map((item) => (
    <Marker
      key={item.index}
      position={getCoord([item.x, item.y])}
      icon={divIcon({
        className: classNames("icon text-[32px]", `icon-${item.icon}`),
        iconSize: [32, 32],
        html: item.icon === "zone" ? `<span>${item.index}</span>` : false,
      })}
    >
      {item.name ? <Popup>{item.link ? <Link to={`/${item.link}`}>{item.name}</Link> : item.name}</Popup> : null}
    </Marker>
  ));
};

const LAYER_CONFIG = [
  {
    name: "野生特区",
    icon: "zone",
  },
  {
    name: "宝可梦中心",
    icon: "pc",
  },
  {
    name: "咖啡店",
    icon: "cafe",
  },
  {
    name: "重要地点",
    icon: "building",
  },
  {
    name: "全息传送梯",
    icon: "holovator",
  },
  {
    name: "梯子",
    icon: "ladder",
  },
  {
    name: "长椅",
    icon: "bench",
  },
  {
    name: "树果摊",
    icon: "berry",
  },
  {
    name: "薄荷摊",
    icon: "mint",
  },
];

const isFilterEqual = (filter_1: IMapFilter, filter_2: IMapFilter) => {
  if (filter_1.index !== filter_2.index) return false;
  const layers_1 = filter_1.layers || new Set<string>();
  const layers_2 = filter_2.layers || new Set<string>();
  if (layers_1.size !== layers_2.size) return false;
  for (const layer of layers_1) {
    if (!layers_2.has(layer)) return false;
  }
  return true;
};

const INITIAL_FILTER: IMapFilter = {
  layers: new Set(LAYER_CONFIG.map((layer) => layer.icon)),
};

interface IProps extends PropsWithChildren {
  loading?: boolean;
  showReset?: boolean;
  filter?: IMapFilter;
  filterComponent?: ReactNode;
}

export const LumioseMap: FC<IProps> = ({
  filter: defaultFilter,
  loading,
  showReset = true,
  filterComponent,
  children,
}) => {
  const [filter, setFilter] = useState<IMapFilter>(defaultFilter || INITIAL_FILTER);
  useUpdateEffect(() => setFilter(defaultFilter || INITIAL_FILTER), [defaultFilter]);

  const [positions, positionsLoading] = useImport(
    () => import("@/data/areas/positions").then((mod) => mod.AreaPositions),
    [],
  );

  const filteredPositions = useMemo(
    () =>
      filter.index !== undefined
        ? positions?.filter((item) => item.index === filter.index)
        : filter.layers
          ? positions?.filter((item) => filter.layers?.has(item.icon))
          : null,
    [filter, positions],
  );

  return (
    <Fragment key="lumiose-map">
      <div className="flex-container mb-2">
        {LAYER_CONFIG.map((layer) => (
          <div
            key={layer.icon}
            className="flex items-center gap-1"
          >
            <Switch
              size="small"
              checked={filter.layers?.has(layer.icon)}
              onChange={(checked) => {
                const layers = new Set(filter.layers) || new Set<string>();
                if (checked) {
                  layers.add(layer.icon);
                } else {
                  layers.delete(layer.icon);
                }
                setFilter(() => ({
                  layers: layers,
                }));
              }}
            />
            <Icon name={layer.icon} />
            <div className="text-sm">{layer.name}</div>
          </div>
        ))}
      </div>
      {filterComponent}
      {showReset ? (
        <div className="flex justify-center mb-2">
          <Button
            onClick={() => setFilter(defaultFilter || INITIAL_FILTER)}
            disabled={loading || positionsLoading || isFilterEqual(filter, defaultFilter || INITIAL_FILTER)}
          >
            回到初始状态
          </Button>
        </div>
      ) : null}
      <BasicMap loading={loading || positionsLoading}>
        <MapLayer data={filteredPositions || []} />
        {children}
      </BasicMap>
      <div className="map-note">
        地点坐标参考自：
        <Link to="https://www.serebii.net/pokearth/lumiosecity/">Serebii.net</Link>
      </div>
    </Fragment>
  );
};
