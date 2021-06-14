import React from "react";

import "./Note.scss";

interface INote {
  title?: string;
  description?: string;
}

export const Note: React.FC<INote> = ({ title, description, children }) => {
  return (
    <div className="note">
      {title && <p className="note__title">{title}</p>}
      {description && <p className="note__description">{description}</p>}
      {children && <div className="note__children">{children}</div>}
    </div>
  );
};
