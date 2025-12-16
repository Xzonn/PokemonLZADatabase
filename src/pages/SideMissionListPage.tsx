import { FC } from "react";
import { Navigate } from "react-router-dom";

const SideMissionListPage: FC = () => (
  <Navigate
    to="/任务一览"
    replace
  />
);

export default SideMissionListPage;
