import React from "react";

import "./TextBlock.scss";

export const TextBlock: React.FC = ({ children }) => {
  return <div className="text-block">{children}</div>;
};
