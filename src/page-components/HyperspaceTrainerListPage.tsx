"use client";

import { Button, Spin } from "antd";
import { FC, Fragment, useEffect, useMemo } from "react";

import { RoyaleTrainerTable } from "@/components";
import { TrainerRoyale } from "@/types";
import { DEFAULT_TITLE, useImport, useLoadingAnchor } from "@/utils";

const RANKS = ["1", "2", "3", "4-5"];

const HyperspaceTrainerListPage: FC = () => {
  useEffect(() => {
    document.title = `对战异次元 - ${DEFAULT_TITLE}`;
  }, []);

  const [data, loading] = useImport(async () => (await import("@/data/tr/hyperspace.json")).default as TrainerRoyale[]);
  const sections = useMemo(() => {
    const groupedData = Object.groupBy(data || [], (trainer) => parseInt(trainer.id.split("_")[2], 10));

    return Object.entries(groupedData).map(([rank, trainers]) => (
      <div
        key={rank}
        className="section"
      >
        <h2>{rank === "4" ? "4-5" : rank} 星级</h2>
        <p>点击每行的“＋”可以查看宝可梦详情。</p>
        <RoyaleTrainerTable
          loading={loading}
          data={trainers || []}
        />
      </div>
    ));
  }, [data, loading]);

  useLoadingAnchor([loading]);

  return (
    <Fragment key="pokemon-list">
      <div className="section">
        <h1>对战异次元</h1>
        <p className="description">所有宝可梦等级均为基础等级，实际等级会受到异次元空间的影响而提高。</p>
        <div className="flex-container">
          {RANKS.map((rank) => (
            <Button
              key={rank}
              onClick={() => {
                window.history.replaceState(null, "", `#heading-${rank}-星级`.toLowerCase());
              }}
            >
              {rank} 星级
            </Button>
          ))}
        </div>
      </div>

      {loading ? (
        <Spin spinning>
          <div className="section" />
        </Spin>
      ) : (
        sections
      )}
    </Fragment>
  );
};

export default HyperspaceTrainerListPage;
