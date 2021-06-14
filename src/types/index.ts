export interface IConfigDefaults {
  container: {
    containerWidths: Record<BreakpointList, number>;
  };
  row: {
    layout?: 12 | 24 | number;
    auto?: boolean;
    animated?: boolean;
  };
  column: {};
}

export interface IBreakpointObjectProps {
  span?: number;
  offset?: number;
  push?: number;
  pull?: number;
  order?: number;
}

export interface IBreakpointProps {
  xs?: number | IBreakpointObjectProps;
  sm?: number | IBreakpointObjectProps;
  md?: number | IBreakpointObjectProps;
  lg?: number | IBreakpointObjectProps;
  xl?: number | IBreakpointObjectProps;
  xxl?: number | IBreakpointObjectProps;
}

export type BreakpointList = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

export type ScreenBreakpoints = Partial<Record<BreakpointList, boolean>>;

export type Gutter = number | Partial<Record<BreakpointList, number>>;

export type Unit = "px" | "%" | "em" | "rem" | "vw" | "vh" | "vmin" | "vmax" | "pt" | "pc" | "ex" | "ch" | "cm" | "mm" | "in";

export type UseScreenBreakpoints = ScreenBreakpoints;

export type { IContainerProps } from "./../components/Container";
export type { IRowProps } from "./../components/Row";
export type { IColumnProps } from "./../components/Col";
