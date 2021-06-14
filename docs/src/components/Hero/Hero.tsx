import React from "react";

import "./Hero.scss";

export const Hero: React.FC = ({ children }) => {
  return <div className="hero">{children}</div>;
};
