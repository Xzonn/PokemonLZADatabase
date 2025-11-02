import { Card } from "antd";
import React, { Fragment, useEffect } from "react";

import { HOME_NAVIGATIONS } from "@/data";
import { DEFAULT_TITLE, Icon, Link } from "@/utils";

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = DEFAULT_TITLE;

    document.querySelector("main")?.classList.add("main-home");

    return () => {
      document.querySelector("main")?.classList.remove("main-home");
    };
  }, []);

  return (
    <Fragment key="pokemon-list">
      <div className="block">
        <div className="home-navigation">
          <h1 className="flex items-center justify-center">
            <Icon
              name="超Z队"
              size={48}
            />
            <span>{DEFAULT_TITLE}</span>
            <Icon
              name="超Z队"
              size={48}
            />
          </h1>
          <div className="description">前往密阿雷市冒险吧！</div>
          {HOME_NAVIGATIONS.map((block) => (
            <Fragment key={block.title}>
              <h2>{block.title}</h2>
              <div className="home-links">
                {block.contents.map((section) => (
                  <Card
                    key={section.title}
                    title={section.title}
                    className="home-link-card"
                  >
                    {section.contents.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="home-link-item"
                      >
                        <Icon
                          name={item.icon}
                          className="home-link-icon"
                        />
                        <div className="home-link-label">{item.label}</div>
                      </Link>
                    ))}
                  </Card>
                ))}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
