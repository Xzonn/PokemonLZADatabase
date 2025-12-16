import { FC } from "react";
import { useParams } from "react-router-dom";

import { MissionDetailComponent } from "@/components";

import NotFoundPage from "./NotFoundPage";

const HyperspaceMissionDetailPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const missionId = parseInt(id || "", 10);

  return missionId >= 1 && missionId <= 14 && id?.length === 3 ? (
    <MissionDetailComponent
      category="异"
      mission={id}
    />
  ) : (
    <NotFoundPage />
  );
};

export default HyperspaceMissionDetailPage;
