import { IConfigDefaults } from "../types";

export const breakpoints = ["xs", "sm", "md", "lg", "xl", "xxl"] as const;
export const breakpointsMap = {
  exact: {
    xs: "(max-width: 575px)",
    sm: "(min-width: 576px) and (max-width: 768px)",
    md: "(min-width: 768px) and (max-width: 992px)",
    lg: "(min-width: 992px) and (max-width: 1200px)",
    xl: "(min-width: 1200px) and (max-width: 1600px)",
    xxl: "(min-width: 1600px)",
  },
  range: {
    xs: "(max-width: 575px)",
    sm: "(min-width: 576px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 992px)",
    xl: "(min-width: 1200px)",
    xxl: "(min-width: 1600px)",
  },
} as const;

export const containerWidths = {
  xs: 540,
  sm: 540,
  md: 750,
  lg: 960,
  xl: 1140,
  xxl: 1540,
} as const;

export const configDefaults: IConfigDefaults = {
  container: {
    containerWidths,
  },
  row: {
    layout: 12,
    auto: false,
    animated: false,
  },
  column: {},
};
