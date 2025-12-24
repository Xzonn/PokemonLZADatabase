"use client";

import Giscus from "@giscus/react";
import React from "react";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white sm:rounded-2xl sm:shadow-xl">
      {children}
      <div className="giscus section">
        <Giscus
          host="https://giscus.xzonn.top"
          repo="Xzonn/PokemonLZADatabase"
          repoId="R_kgDOQE57vg"
          category="General"
          categoryId="DIC_kwDOQE57vs4Cw8Fx"
          mapping="specific"
          term="评论区"
          reactions-enabled="1"
          emit-metadata="0"
          input-position="top"
          theme="preferred_color_scheme"
          lang="zh-CN"
        />
      </div>
    </div>
  );
}
