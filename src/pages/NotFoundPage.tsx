import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { PokemonDataById } from "../data/pokemon";
import { DefaultTitle } from "../utils";

import { PokemonIcon } from "@/components";

const NotFoundPage: React.FC = () => {
  useEffect(() => {
    document.title = `页面未找到 - ${DefaultTitle}`;
  }, []);

  return (
    <div
      key="not-found"
      className="text-center py-20"
    >
      <div className="bg-red-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
        <PokemonIcon pokemon={PokemonDataById["718-3"]} />
      </div>
      <h1>页面未找到</h1>
      <p className="text-xl text-gray-600 mb-8">您访问的页面不存在或已被删除。</p>
      <Link
        to="/"
        className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors duration-300"
      >
        返回首页
      </Link>
    </div>
  );
};

export default NotFoundPage;
