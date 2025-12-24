"use client";

import { redirect } from "next/navigation";
import { FC } from "react";

import { halfToFull } from "@/utils";
import { useParams } from "@/utils/ParamsProvider";

import NotFoundPage from "./NotFoundPage";

const AreaDetailPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const zoneId = parseInt(id || "", 10);

  if (zoneId >= 1 && zoneId <= 20) {
    redirect(`/area/${halfToFull(zoneId.toString())}号野生特区`);
  }

  return <NotFoundPage />;
};

export default AreaDetailPage;
