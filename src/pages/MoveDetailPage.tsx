import React from "react";
import { useParams } from "react-router-dom";

import NotFoundPage from "./NotFoundPage";

import { MoveDetail } from "@/components";
import { MoveDataByName } from "@/data";

const MoveDetailPage: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const move = MoveDataByName[name || ""];

  return move ? <MoveDetail data={move} /> : <NotFoundPage />;
};

export default MoveDetailPage;
