import { useRequest } from "ahooks";
import { Button } from "antd";
import { divIcon } from "leaflet";
import React, { FC, Fragment, useEffect, useState } from "react";
import { Marker, Popup, useMap } from "react-leaflet";

import { Map, SideMissionTable } from "@/components";
import { SideMission } from "@/types";
import { DEFAULT_TITLE, MAP_CENTER, getCoord, onUseRequestError } from "@/utils";

const SideMissionMapLayer: FC<{ data: SideMission[] }> = ({ data }) => {
  const map = useMap();

  if (data?.length === 1) {
    const mission = data[0];
    map.setView(getCoord([mission.x, mission.y]), 2);
  } else {
    map.setView(getCoord(MAP_CENTER), 0);
  }

  return data?.map((mission) => (
    <Marker
      key={mission.index}
      position={getCoord([mission.x, mission.y])}
      icon={divIcon({
        className: "icon icon-side-mission",
        iconSize: [24, 24],
      })}
    >
      <Popup>
        #{mission.index.toString().padStart(3, "0")} {mission.name}
      </Popup>
    </Marker>
  ));
};

const SideMissionListPage: React.FC = () => {
  useEffect(() => {
    document.title = `副任务一览 - ${DEFAULT_TITLE}`;
  }, []);

  const { data = null, loading } = useRequest(async () => (await import(`@/data/mission/side`)).SideMissionData, {
    onError: onUseRequestError,
  });

  const [active, setActive] = useState<number | null>(null);

  return (
    <Fragment key="side-mission-list">
      <div className="block">
        <h1>副任务一览</h1>
      </div>

      <div className="block">
        <h2 id="地图">地图</h2>
        <div className="flex justify-center mb-2">
          <Button
            onClick={() => setActive(null)}
            disabled={loading || active === null}
          >
            重置筛选
          </Button>
        </div>
        <Map loading={loading}>
          {data ? (
            <SideMissionMapLayer data={active !== null ? data.filter((mission) => mission.index === active) : data} />
          ) : null}
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
      </div>

      <div className="block">
        <h2>任务列表</h2>
        <SideMissionTable
          loading={loading}
          data={data || []}
          setActive={setActive}
        />
      </div>
    </Fragment>
  );
};

export default SideMissionListPage;
