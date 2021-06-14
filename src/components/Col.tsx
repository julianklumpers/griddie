import React from "react";
import { useBreakpoint } from "../hooks/useBreakpoint";
import { getCurrentScreen, isInRangeOf } from "../utils/helpers";
import { ContainerContext } from "./Container";
import { RowContext } from "./Row";
import { getColumnStyles } from "../utils";
import { IBreakpointProps, IBreakpointObjectProps } from "../types";
import type { BreakpointList } from "../types";

export interface IColumnProps extends IBreakpointProps, IBreakpointObjectProps, React.HTMLAttributes<HTMLDivElement> {
  hide?: BreakpointList[];
}

const Col: React.FC<IColumnProps> = ({
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  hide,
  span,
  pull,
  push,
  order,
  style,
  offset,
  children,
  ...props
}) => {
  // TODO fix typings
  let { screen } = React.useContext(ContainerContext) as any;
  const { columnStyles, ...rowOptions } = React.useContext(RowContext) as any;

  if (!screen) {
    screen = useBreakpoint();
  }

  const currentScreen = React.useMemo(() => getCurrentScreen(screen), [screen]);

  const styles = React.useMemo(
    () =>
      getColumnStyles(
        currentScreen,
        {
          xs,
          sm,
          md,
          lg,
          xl,
          xxl,
          span,
          pull,
          push,
          order,
          offset,
        },
        rowOptions,
        { ...columnStyles, ...style }
      ),
    [currentScreen, xs, sm, md, lg, xl, xxl, span, pull, push, order, offset, rowOptions, style]
  );

  if (hide && isInRangeOf(hide, screen)) {
    return null;
  }

  return (
    <div style={styles} {...props}>
      {children}
    </div>
  );
};

export default Col;
