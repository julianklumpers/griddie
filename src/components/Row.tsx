import React from "react";

import { getGridOptions } from "../config";
import { useBreakpoint } from "../hooks/useBreakpoint";
import { syncPropsWithConfig } from "../utils/helpers";
import { getRowStyles } from "../utils";

import { IConfigDefaults } from "../types";
import type { Gutter, Unit } from "../types";
import { ContainerContext } from "./Container";

const RowContext = React.createContext({});

type RowConfig = Partial<IConfigDefaults["row"]>;
export interface IRowProps extends RowConfig, React.HTMLAttributes<HTMLDivElement> {
  gutter?: Gutter & [Gutter, Gutter?];
  align?: React.CSSProperties["alignItems"];
  justify?: React.CSSProperties["justifyContent"];
  unit?: Unit;
}

const Row: React.FC<IRowProps> = ({ gutter = 0, align, justify, unit = "px", auto, style, layout, animated, children, ...props }) => {
  let { screen } = React.useContext(ContainerContext) as any;

  if (!screen) {
    screen = useBreakpoint();
  }

  const config = getGridOptions("row");

  const { animated: _animated, ...syncedProps } = React.useMemo(() => syncPropsWithConfig({ layout, auto, animated }, config), [
    layout,
    auto,
    animated,
  ]);

  const styles = React.useMemo(
    () =>
      getRowStyles(screen, unit, {
        gutter,
        justify,
        align,
        auto,
        animated: _animated,
      }),
    [screen, unit, gutter, justify, auto, align, _animated]
  );

  const ctxValue = React.useMemo(() => ({ columnStyles: styles.col, ...syncedProps }), [styles.col, syncedProps]);

  return (
    <RowContext.Provider value={ctxValue}>
      <div style={{ ...styles.row, ...style }} {...props}>
        {children}
      </div>
    </RowContext.Provider>
  );
};

export { RowContext };
export default Row;
