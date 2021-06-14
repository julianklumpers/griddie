import React from "react";

import "./Checkbox.scss";

interface ICheckboxProps {
  title?: string;
  position?: "left" | "right";
  checked?: boolean;
  disabled?: boolean;
  htmlFor?: string;
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
}

export const Checkbox: React.FC<ICheckboxProps> = ({ title, position = "left", checked, disabled = false, htmlFor, onChange }) => {
  return (
    <div className="checkbox">
      <label htmlFor={htmlFor} className="checkbox__label">
        {title && position === "left" && <span>{title}</span>}
        <input id={htmlFor} type="checkbox" checked={checked} disabled={disabled} onChange={onChange} />
        {title && position === "right" && <span>{title}</span>}
      </label>
    </div>
  );
};
