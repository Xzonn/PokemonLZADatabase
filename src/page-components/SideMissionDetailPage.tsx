"use client";

import { FC } from "react";
import { useParams } from "@/utils/ParamsProvider";

import { MissionDetailComponent } from "@/components";

import NotFoundPage from "./NotFoundPage";

const SideMissionDetailPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const missionId = parseInt(id || "", 10);

  return id?.match(/EX[123]/) || (missionId >= 1 && missionId <= 200 && id?.length === 3) ? (
    <MissionDetailComponent
      category="副"
      mission={id}
    />
  ) : (
    <NotFoundPage />
  );
};

export default SideMissionDetailPage;
