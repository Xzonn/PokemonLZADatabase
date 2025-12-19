import { ReactNode } from "react";

import { TM } from "@/types";

import { Link } from "./components";

export const getTMMethod = (tm: TM, onClick?: () => void): ReactNode => {
  if (tm.researchLevel) {
    return (
      <>
        <Link to="/茉蜜姬调查">茉蜜姬调查</Link>（{tm.researchLevel} 级）
      </>
    );
  } else if (tm.mainMission) {
    return (
      <Link to={`/main/${tm.mainMission.toString().padStart(3, "0")}`}>
        主任务 {tm.mainMission.toString().padStart(3, "0")}
      </Link>
    );
  } else if (tm.sideMission) {
    return (
      <Link to={`/side/${tm.sideMission.toString().padStart(3, "0")}`}>
        副任务 {tm.sideMission.toString().padStart(3, "0")}
      </Link>
    );
  } else if (tm.location === "超级碎片") {
    return <Link to="/i/超级碎片#作用">超级碎片兑换</Link>;
  } else if (tm.location) {
    return (
      <Link
        to={onClick ? "#地图" : "/招式学习器一览"}
        onClick={onClick}
      >
        {tm.location}
      </Link>
    );
  }
  return "—";
};
