import * as React from "react";
import { UseScreenBreakpoints } from "@zerodp/griddie";

import "./ScreenInfo.scss";

export const ScreenInfo: React.FC<{ screen: UseScreenBreakpoints }> = ({ screen }) => {
  return (
    <div className="screen-info">
      <div className="screen-info__breakpoints-container">
        {(Object.keys(screen) as [keyof UseScreenBreakpoints]).map((bps) =>
          screen[bps] ? (
            <span key={bps} className="screen-info__selected">
              {bps}
            </span>
          ) : (
            ` ${bps} `
          )
        )}
      </div>
    </div>
  );
};
