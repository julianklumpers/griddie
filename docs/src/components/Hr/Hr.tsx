import React from "react";
import { useLocation } from "react-router";
import cs from "classnames";

import "./Hr.scss";

interface IHrProps {
  title: string;
  id?: string;
  small?: boolean;
  actions?: string | React.ReactChild;
}

export const Hr: React.FC<IHrProps> = ({ title, id, small = false, actions }) => {
  const testRef = React.useRef<HTMLDivElement>(null);
  const location = useLocation();

  React.useEffect(() => {
    const { hash } = location;

    if (`#${id}` === hash) {
      setTimeout(() => {
        if (testRef.current) {
          const top = testRef.current.getBoundingClientRect().y + window.pageYOffset - 60;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 150);
    }
  }, []);

  return (
    <div ref={testRef} id={id} className="hr">
      {title && (
        <span
          className={cs("hr__text", "hr--left", {
            "hr--small": small,
          })}
        >
          {title}
        </span>
      )}
      {actions && <span className="hr__text hr--right">{actions}</span>}
    </div>
  );
};
