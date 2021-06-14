import React from "react";
import { useBreakpoint, getCurrentScreen, IBreakpointProps } from "@zerodp/griddie";

import "./ColContent.scss";

interface IColContentProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  vSpace?: IBreakpointProps;
  hSpace?: IBreakpointProps;
}

export const ColContent: React.FC<IColContentProps> = ({ vSpace, hSpace, title, children, className, ...props }) => {
  const screen = useBreakpoint();
  const currentScreen = React.useMemo(() => getCurrentScreen(screen), [screen]);

  return (
    <div className={["col-content", className].join(" ")} {...props}>
      {title && <span className="col-title">{title}</span>}
      {children}
      {vSpace && (
        <>
          <div className="gutter-v-info" style={{ top: 10 }}>
            <span>{"^"}</span>
            {vSpace[currentScreen] || 0 / 2}
          </div>
          <div className="gutter-v-info" style={{ bottom: 10 }}>
            {vSpace[currentScreen] || 0 / 2}
            <span style={{ transform: "rotate(180deg)" }}>{"^"}</span>
          </div>
        </>
      )}
      {hSpace && (
        <>
          <div className="gutter-h-info" style={{ left: 10 }}>
            {"<"}
            {hSpace[currentScreen] || 0 / 2}
          </div>
          <div className="gutter-h-info" style={{ right: 10 }}>
            {hSpace[currentScreen] || 0 / 2}
            {">"}
          </div>
        </>
      )}
    </div>
  );
};
