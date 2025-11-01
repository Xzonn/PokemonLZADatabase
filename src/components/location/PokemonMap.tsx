import { useRequest } from "ahooks";
import { Button } from "antd";
import { divIcon } from "leaflet";
import { FC, Fragment } from "react";
import { Marker, Popup, useMap } from "react-leaflet";

import { ZoneLink } from "./ZoneLink";

import { Map } from "@/components";
import { Position } from "@/types";
import { MAP_CENTER, getCoord, onUseRequestError } from "@/utils";

const MapLayer: FC<{ data: Position[] }> = ({ data }) => {
  const map = useMap();

  if (data?.length === 1) {
    const mission = data[0];
    map.setView(getCoord([mission.x, mission.y]), 2);
  } else {
    map.setView(getCoord(MAP_CENTER), 0);
  }

  return data?.map((item) => (
    <Marker
      key={item.index}
      position={getCoord([item.x, item.y])}
      icon={divIcon({
        className: "icon icon-zone text-[32px]",
        iconSize: [32, 32],
        html: `<span>${item.index}</span>`,
      })}
    >
      <Popup>
        <ZoneLink id={item.index} />
      </Popup>
    </Marker>
  ));
};

interface IProps {
  active: number | null;
  setActive: (index: number | null) => void;
}

export const PokemonMap: FC<IProps> = ({ active, setActive }) => {
  const { data = null, loading } = useRequest(async () => (await import(`@/data/zone/location`)).WildZonePositions, {
    onError: onUseRequestError,
  });

  return (
    <Fragment key="wild-zone-list">
      <div className="flex justify-center mb-2">
        <Button
          onClick={() => setActive(null)}
          disabled={loading || active === null}
        >
          重置筛选
        </Button>
      </div>
      <Map loading={loading}>
        {data ? <MapLayer data={active !== null ? data.filter((item) => item.index === active) : data} /> : null}
      </Map>
      <div className="map-note">
        地点坐标参考自：
        <a
          href="https://www.serebii.net/pokearth/lumiosecity/"
          target="_blank"
          rel="noreferrer"
        >
          Serebii.net
        </a>
      </div>
    </Fragment>
  );
};
