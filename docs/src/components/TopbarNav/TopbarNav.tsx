import React from "react";
import { TextLink } from "@components";
import { ReactComponent as GitHubIcon } from "../../assets/github.svg";

import "./TopbarNav.scss";

export const TopbarNav = () => {
  return (
    <nav className="topbar-nav">
      <div className="nav-items">
        <div className="nav-item">
          <TextLink link="/overview">Docs</TextLink>
        </div>
        <div className="nav-item">
          <TextLink link="/examples/basic-grid">Examples</TextLink>
        </div>
        <div className="nav-item">
          <TextLink link="https://github.com/" iconLeft={<GitHubIcon width={18} />}>
            GitHub
          </TextLink>
        </div>
      </div>
    </nav>
  );
};
