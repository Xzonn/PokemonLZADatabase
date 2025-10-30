import { ReactNode } from "react";

import { Link } from "@/components/Link";
import { TM } from "@/types";

export const getTMMethod = (tm: TM, onClick?: () => void): ReactNode => {
  if (tm.researchLevel) {
    return (
      <>
        <Link to="/茉蜜姬调查">茉蜜姬调查</Link>（{tm.researchLevel} 级）
      </>
    );
  } else if (tm.sideMission) {
    return (
      <>
        <Link to="/副任务一览">副任务</Link> #{tm.sideMission.toString().padStart(3, "0")}
      </>
    );
  } else if (tm.location) {
    return (
      <>
        <Link
          to={onClick ? "" : "/招式学习器一览"}
          onClick={onClick}
        >
          {tm.location}
        </Link>
      </>
    );
  }
  return "—";
};
