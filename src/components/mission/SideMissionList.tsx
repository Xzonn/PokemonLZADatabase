import { useRequest } from "ahooks";
import { Button } from "antd";
import L, { divIcon } from "leaflet";
import { FC, Fragment, useMemo, useState } from "react";

import { LeafletMap } from "../map";
import { SideMissionTable } from "./SideMissionTable";

import { onUseRequestError } from "@/utils";

export const SideMissionList: FC = () => {
  const { data = null, loading } = useRequest(
    async () => {
      const realData = await import(`@/data/mission/side`);
      return realData.SideMissionData;
    },
    {
      onError: onUseRequestError,
    },
  );

  const [active, setActive] = useState<number | null>(null);

  const { layers, center, zoom } = useMemo(() => {
    const layer = L.featureGroup();
    const filteredData = active !== null ? data?.filter((mission) => mission.index === active) : data;

    filteredData?.forEach((mission) => {
      const marker = L.marker(L.latLng(-mission.y / 8, mission.x / 8), {
        icon: divIcon({
          className: "icon-side-mission",
          iconSize: [24, 24],
        }),
      }).bindTooltip(`#${mission.index.toString().padStart(3, "0")} ${mission.name}`, {
        direction: "top",
        offset: [0, -10],
      });
      marker.addTo(layer);
    });
    const layers = {
      sideMission: {
        group: layer,
        name: "副任务",
        show: true,
      },
    };
    const center =
      filteredData?.length === 1 ? ([filteredData[0].x / 8, filteredData[0].y / 8] as [number, number]) : undefined;
    const zoom = filteredData?.length === 1 ? 2 : undefined;

    return {
      layers,
      center,
      zoom,
    };
  }, [data, active]);

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
        <LeafletMap
          loading={loading}
          layers={layers}
          center={center}
          zoom={zoom}
        />
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
