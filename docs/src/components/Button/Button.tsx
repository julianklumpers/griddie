import React from "react";

import "./Button.scss";

export const Button: React.FC<React.HTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
  return (
    <button className="button" {...props}>
      {children}
    </button>
  );
};
