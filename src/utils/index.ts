import { getGutterSpaces, isObject, getColumnWidth, getFirstPrevBreakpoint, getNummericValuesFromStyle } from "./helpers";

import { IBreakpointProps, IBreakpointObjectProps } from "../types";
import type { ScreenBreakpoints, UseScreenBreakpoints, BreakpointList, Unit, Gutter } from "../types";

interface IRowStylesProps {
  gutter?: Gutter;
  justify?: React.CSSProperties["justifyContent"];
  align?: React.CSSProperties["alignItems"];
  auto?: boolean;
  animated?: boolean;
}

type ColumnStylesProps = IBreakpointProps & IBreakpointObjectProps;

export const getContainerStyles = (
  currentScreen: BreakpointList,
  fluid: boolean,
  breakpointProps: ScreenBreakpoints,
  containerWidths?: Record<string, number>
) => {
  const styles: React.CSSProperties = {
    position: "relative",
    margin: "0 auto",
    width: "100%",
    overflow: "hidden",
    // TODO remove this
    transition: "all 0.3s ease-in-out",
  };

  const breakpoints = Object.keys(breakpointProps) as [keyof IBreakpointProps];
  const hasNoBreakPoints = breakpoints.every((key) => !breakpointProps[key]);

  if (fluid && hasNoBreakPoints) {
    return styles;
  }

  const filteredBreakpoints = breakpoints.filter((key) => Boolean(!breakpointProps[key]));

  for (const breakpoint of filteredBreakpoints) {
    if (currentScreen === breakpoint) {
      styles.width = "";
      styles.maxWidth = `${containerWidths?.[currentScreen]}px`;
      break;
    }
  }

  return styles;
};

export const getRowStyles = (screen: UseScreenBreakpoints, unit: Unit, { gutter, justify, align, animated }: IRowStylesProps) => {
  const row: React.CSSProperties = {
    display: "flex",
    flexFlow: "row wrap",
  };
  const col: React.CSSProperties = {};

  if (gutter) {
    let [vSpace, hSpace] = getGutterSpaces(screen, gutter);

    if (!isNaN(vSpace) && !isNaN(hSpace)) {
      vSpace = Number(vSpace);
      hSpace = Number(hSpace);

      if (vSpace) row.rowGap = vSpace;

      row.marginLeft = `-${hSpace / 2}${unit}`;
      row.marginRight = `-${hSpace / 2}${unit}`;

      col.paddingLeft = `${hSpace / 2}${unit}`;
      col.paddingRight = `${hSpace / 2}${unit}`;
    }
  }

  if (justify === "start") row.justifyContent = "flex-start";
  if (justify === "center") row.justifyContent = "center";
  if (justify === "end") row.justifyContent = "flex-end";
  if (justify === "space-between") row.justifyContent = "space-between";
  if (justify === "space-around") row.justifyContent = "space-around";
  if (justify === "space-evenly") row.justifyContent = "space-evenly";

  if (align === "top") row.alignItems = "flex-start";
  if (align === "middle") row.alignItems = "center";
  if (align === "bottom") row.alignItems = "flex-end";

  if (animated) row.transition = "all 0.3s ease-in-out";

  return { row, col };
};

export const getColumnStyles = (
  currentScreen: BreakpointList,
  columnProps: ColumnStylesProps,
  ctxOptions: any,
  styles: React.CSSProperties = {}
): React.CSSProperties => {
  const { layout, auto } = ctxOptions;
  const { span, offset, push, pull, order, ...breakpointProps } = columnProps;

  let currentBreakpoint = breakpointProps[currentScreen];

  if (typeof currentBreakpoint === "object" && isObject(currentBreakpoint)) {
    return getColumnStyles(currentScreen, currentBreakpoint, ctxOptions, styles);
  }

  if (span) currentBreakpoint = span;
  if (offset) styles.marginLeft = `${getColumnWidth(offset, layout)}%`;
  if (push) styles.left = `${getColumnWidth(push, layout)}%`;
  if (pull) styles.right = `${getColumnWidth(pull, layout)}%`;
  if (order) styles.order = order;

  let width;

  if (typeof currentBreakpoint === "number" || typeof currentBreakpoint === "undefined") {
    width = getColumnWidth(currentBreakpoint, layout);
  }

  const firstPrevBreakpoint = getFirstPrevBreakpoint(breakpointProps, currentScreen);

  if (auto && !firstPrevBreakpoint) {
    // full auto mode
    styles.maxWidth = ``;
    styles.flex = "1 0";
  }
  if (!auto && !currentBreakpoint && !firstPrevBreakpoint) {
    styles.maxWidth = ``;
    styles.flex = "0 0";
  }
  // TODO find better solution for this code
  if (auto && typeof currentBreakpoint === "number" && currentBreakpoint) {
    width = getColumnWidth(currentBreakpoint, layout);
    delete styles.maxWidth;
    delete styles.flex;
  }
  if (auto && styles.width) {
    const computedWidth = getNummericValuesFromStyle(`${styles.width}`);

    if (computedWidth[0] === 0) {
      styles.paddingLeft = 0;
      styles.paddingRight = 0;
    }

    // user defined fix width. remove the flex grow
    styles.flex = "";
  }

  if (typeof firstPrevBreakpoint === "number" && firstPrevBreakpoint) {
    width = getColumnWidth(firstPrevBreakpoint, layout);
  }
  if (typeof firstPrevBreakpoint === "object" && isObject(firstPrevBreakpoint)) {
    return getColumnStyles(currentScreen, firstPrevBreakpoint, ctxOptions, styles);
  }

  return {
    position: "relative",
    maxWidth: `${width}%`,
    flex: `1 0 ${width}%`,
    // override styles depending on options
    ...styles,
  };
};
