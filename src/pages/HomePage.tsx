import React, { Fragment, useEffect } from "react";

import { DEFAULT_TITLE } from "@/utils";

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = DEFAULT_TITLE;
  }, []);

  return (
    <Fragment key="pokemon-list">
      <div className="block">
        <h1>{DEFAULT_TITLE}</h1>
      </div>
    </Fragment>
  );
};

export default HomePage;
