import React from "react";
import { useHistory } from "react-router-dom";
import "./TextLink.scss";

interface ITextLink {
  link: string;
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
}

export const TextLink: React.FC<ITextLink> = ({ link, iconLeft, iconRight, children }) => {
  const history = useHistory();

  const isUrl = link.includes("http");

  return (
    <a className="text-link" onClick={() => !isUrl && history.push(link)} href={isUrl ? link : undefined}>
      {iconLeft && React.cloneElement(iconLeft, { className: "icon icon-left" })}
      {children}
      {iconRight && React.cloneElement(iconRight, { className: "icon icon-right" })}
    </a>
  );
};
