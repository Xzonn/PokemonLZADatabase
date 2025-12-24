"use client";

import { FC } from "react";
import { useParams } from "@/utils/ParamsProvider";

import { MissionDetailComponent } from "@/components";

import NotFoundPage from "./NotFoundPage";

const MainMissionDetailPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const missionId = parseInt(id || "", 10);

  return missionId >= 1 && missionId <= 42 && id?.length === 3 ? (
    <MissionDetailComponent
      category="主"
      mission={id}
    />
  ) : (
    <NotFoundPage />
  );
};

export default MainMissionDetailPage;
