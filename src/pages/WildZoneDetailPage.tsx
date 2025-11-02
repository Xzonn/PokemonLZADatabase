import { FC } from "react";
import { Navigate, useParams } from "react-router-dom";

import NotFoundPage from "./NotFoundPage";

import { halfToFull } from "@/utils";

const AreaDetailPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const zoneId = parseInt(id || "", 10);

  return zoneId >= 1 && zoneId <= 20 ? (
    <Navigate
      to={`/area/${halfToFull(zoneId.toString())}号野生特区`}
      replace
    />
  ) : (
    <NotFoundPage />
  );
};

export default AreaDetailPage;
