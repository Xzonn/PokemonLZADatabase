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
  } else if (tm.sideMission) {
    return (
      <Link to={`/side/${tm.sideMission.toString().padStart(3, "0")}`}>
        副任务 #{tm.sideMission.toString().padStart(3, "0")}
      </Link>
    );
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
