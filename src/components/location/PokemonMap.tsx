import { Button } from "antd";
import { divIcon } from "leaflet";
import { FC, Fragment } from "react";
import { Marker, Popup, useMap } from "react-leaflet";

import { Map } from "@/components";
import { AreaPositions } from "@/data/areas";
import { Position } from "@/types";
import { Link, MAP_CENTER, getCoord } from "@/utils";

const MapLayer: FC<{ data: Position[] }> = ({ data }) => {
  const map = useMap();

  if (data?.length === 1 && data[0].x !== null) {
    const item = data[0];
    map.setView(getCoord([item.x, item.y]), 2);
  } else {
    map.setView(getCoord(MAP_CENTER), 0);
  }

  return data
    ?.filter((item) => item.x !== null)
    .map((item) => (
      <Marker
        key={item.name}
        position={getCoord([item.x, item.y])}
        icon={divIcon({
          className: "icon icon-zone text-[32px]",
          iconSize: [32, 32],
          html: `<span>${item.index}</span>`,
        })}
      >
        <Popup>
          <Link to={`/area/${item.name}`}>{item.name}</Link>
        </Popup>
      </Marker>
    ));
};

interface IProps {
  loading?: boolean;
  active?: string | null;
  setActive?: (name: string | null) => void;
}

export const PokemonMap: FC<IProps> = ({ active = null, setActive, loading }) => (
  <Fragment key="wild-zone-list">
    {setActive ? (
      <div className="flex justify-center mb-2">
        <Button
          onClick={() => setActive(null)}
          disabled={loading || active === null}
        >
          重置筛选
        </Button>
      </div>
    ) : null}
    <Map loading={loading}>
      <MapLayer data={active !== null ? AreaPositions.filter((item) => item.name === active) : AreaPositions} />
    </Map>
    <div className="map-note">
      地点坐标参考自：
      <Link to="https://www.serebii.net/pokearth/lumiosecity/">Serebii.net</Link>
    </div>
  </Fragment>
);
