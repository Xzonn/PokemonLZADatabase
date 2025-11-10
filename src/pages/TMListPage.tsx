import { Button, TableColumnsType } from "antd";
import { divIcon } from "leaflet";
import React, { FC, Fragment, useEffect, useMemo, useState } from "react";
import { Marker, Popup, useMap } from "react-leaflet";

import { LumioseMap, MoveTable, TMCell } from "@/components";
import { ItemDataByName } from "@/data";
import { TMFull } from "@/types";
import { DEFAULT_TITLE, Link, MAP_CENTER, getCoord, getTMMethod, useImport } from "@/utils";

const getColumns = (setActive: (v: number | null) => void): TableColumnsType<TMFull> => [
  {
    title: "编号",
    dataIndex: "index",
    render: (_, row) => <TMCell item={ItemDataByName[row.tmName]} />,
    sorter: (a, b) => a.index - b.index,
  },
  {
    title: "获取方式",
    key: "method",
    render: (_, row) =>
      getTMMethod(row, () => {
        setActive(row.index);
        document.querySelector("#地图")?.scrollIntoView({
          block: "start",
          behavior: "smooth",
        });
      }),
  },
];

const TMListMapLayer: FC<{ data: TMFull[] }> = ({ data }) => {
  const map = useMap();

  if (data?.length === 1 && data[0].x !== null && data[0].y !== null) {
    const mission = data[0];
    map.setView(getCoord([mission.x!, mission.y!]), 2);
  } else {
    map.setView(getCoord(MAP_CENTER), 0);
  }

  return data
    ?.filter((tm) => tm.x !== null && tm.y !== null)
    .map((tm) => (
      <Marker
        key={tm.index}
        position={getCoord([tm.x!, tm.y!])}
        icon={divIcon({
          className: `icon icon-tm-${tm.type}`,
          iconSize: [24, 24],
        })}
      >
        <Popup>
          No.{tm.index.toString().padStart(3, "0")} <Link to={`/m/${tm.name}`}>{tm.name}</Link>
        </Popup>
      </Marker>
    ));
};

const TMListPage: React.FC = () => {
  useEffect(() => {
    document.title = `招式学习器一览 - ${DEFAULT_TITLE}`;
  }, []);

  const [data, loading] = useImport(async () => (await import("@/data/tm")).TMData);

  const [active, setActive] = useState<number | null>(null);
  const columns = useMemo(() => getColumns(setActive), [setActive]);

  return (
    <Fragment key="tm-list">
      <div className="section">
        <h1>招式学习器一览</h1>
      </div>

      <div className="section">
        <h2 id="地图">地图</h2>
        <LumioseMap
          filter={{}}
          filterComponent={
            <div className="flex justify-center mb-2">
              <Button
                onClick={() => setActive(null)}
                disabled={loading || active === null}
              >
                重置筛选
              </Button>
            </div>
          }
          showReset={false}
          loading={loading}
        >
          {data ? (
            <TMListMapLayer data={active !== null ? data.filter((mission) => mission.index === active) : data} />
          ) : null}
        </LumioseMap>
      </div>

      <div className="section">
        <h2>列表</h2>
        <MoveTable<TMFull>
          loading={loading}
          data={data || []}
          extraColumns={columns}
          pagination={false}
        />
      </div>
    </Fragment>
  );
};

export default TMListPage;
