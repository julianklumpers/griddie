import React from "react";

import "./Select.scss";

interface ISelectProps extends React.HTMLAttributes<HTMLSelectElement> {
  title?: string;
  name?: string;
}

export const Select: React.FC<ISelectProps> = ({ title, children, name, ...props }) => {
  return (
    <div className="select">
      <label>{title}</label>
      <select className="select__select-box" name={name} {...props}>
        {children}
      </select>
    </div>
  );
};
