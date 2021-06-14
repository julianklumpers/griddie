import React from "react";

import "./Usp.scss";

interface IUsp {
  title: string;
}

export const Usp: React.FC<IUsp> = ({ title, children }) => {
  return (
    <div className="usp-home">
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
};
