import { breakpoints } from "../constants";
import { IBreakpointProps } from "../types";
import type { ScreenBreakpoints } from "../types";

import type { BreakpointList, Gutter, UseScreenBreakpoints } from "../types";

/**
 * Checks if the argument is a valid js Object
 *
 * @example
 *  isObject([10, 10]) -> false
 *
 * @param {Object} arg - The value to check agains
 * @returns {boolean} - True of false wether the arg is a valid object or not
 */
export const isObject = (arg: Object) => typeof arg === "object" && Object.prototype.toString.call(arg) === "[object Object]";

/**
 * Utility function for checking the useBreakpoint hook {screen} value exist in the {screenList} array of screens (breakpoints)
 *
 * @param {[BreakpointList]} screenList - The breakpoint array to check agains.
 * @param {UseScreenBreakpoints} screen - The useBreakpoint hook value. Object with 1 true value which is the current breakpoint
 * @returns {boolean} - True or false whether the screen is in view or not
 */
export const isInRangeOf = (screenList: BreakpointList[], screen: UseScreenBreakpoints) => {
  const currentScreen = getCurrentScreen(screen);

  return screenList.includes(currentScreen);
  // const currentViewIdx = breakpoints.indexOf(currentScreen);
  // return screenList[currentViewIdx] || screenList.filter(Boolean).length === 0;
};

/**
 * Utility function to check if an object has any truthy breakpoint
 *
 * @example
 *  hasNoBreakPoints({xs: false, md: false}) -> true
 *
 * @param {IBreakpointProps} breakpointProps - object with breakpoints to check
 * @returns {boolean} - True of false wether the object has breakpoints or not
 */
export const hasNoBreakPoints = (breakpointProps: IBreakpointProps) =>
  (Object.keys(breakpointProps) as [keyof IBreakpointProps]).every((key) => !breakpointProps[key]);

/**
 * Function to get nummeric values from a css style string
 *
 * @example - getNummericValuesFromStyle('margin-left: 10px 5px 10px 5px') -> [10, 5, 10, 5]
 *
 * @param {string} strStyle - The css string to check
 * @returns {number[]} - Array with the extracted nummeric values from the string.
 */
export const getNummericValuesFromStyle = (strStyle: string) => {
  return (strStyle.match(/[0-9]*((\.|,)?[0-9]?[0-9])/g) || []).map(Number);
};

/**
 * Function to merge config properties with props. If no props are provided fall back to config
 *
 * @param {K} props - Component props to merge with
 * @param {K} config - Global config to merge with props
 * @returns {K} - Merged props with config
 */
export const syncPropsWithConfig = <K extends object>(props: K, config: K) => {
  return (Object.keys(props) as [keyof K]).reduce(
    (acc, prop) => ({
      ...acc,
      [prop]: props[prop] ?? config[prop],
    }),
    {} as K
  );
};

/**
 * Function to calculate the width of a column in percentages
 *
 * @example
 *  getColumnWidth(4, 12) -> 33.3333
 *
 * @param {number | undefined} column - number of column space to calculate
 * @param {number} layout - the total columns/layout
 * @returns {number} - the width of the column in percentage
 */
export const getColumnWidth = (column: number | undefined, layout: number) => (100 / layout) * (column ?? layout);

/**
 * Function to get the current "true" breakpoint from the useBreakpoint hook object
 *
 * @example
 *  getCurrentScreen({xs: false, sm: false, md: true, ...}) -> "md"
 *
 * @param {UseScreenBreakpoints} screen - The useBreakpoint hook value. Object with 1 true value which is the current breakpoint
 * @returns {string} - The current active breakpoint
 */
export const getCurrentScreen = (screen: UseScreenBreakpoints): BreakpointList =>
  (Object.keys(screen) as [keyof UseScreenBreakpoints]).filter((bp) => screen[bp])[0];

/**
 * Function the get the first previous provided breakpoint.
 * If a object with the following breakpoints are provided: { xs: 12, md: 6, xl: 3 } and the current screen is: "lg"
 * The function should return 6, because md: 6 is the close previous value.
 *
 * @example
 *  getFirstPrevBreakpoint({xs: 12, md: 6, xl: 3}, "lg") -> 6
 *
 * @param {IBreakpointProps} breakpointProps - object with breakpoints
 * @param {BreakpointList} currentScreen - current screen: "md"
 * @returns {number | false | IBreakpointObjectProps | undefined} - the closest previous breakpoint value
 */
export const getFirstPrevBreakpoint = (breakpointProps: IBreakpointProps, currentScreen: BreakpointList) => {
  const currentIdx = breakpoints.indexOf(currentScreen);

  let fromIdx: number | undefined = undefined;

  for (let idx = currentIdx; idx >= 0; idx--) {
    if (breakpointProps[breakpoints[idx]]) {
      fromIdx = idx;
      break;
    }
  }
  const firstPrevBreakpoint = (fromIdx || fromIdx === 0) && breakpointProps[breakpoints[fromIdx]];

  return firstPrevBreakpoint;
};

/**
 * Recursion function for getting vertical and horizontal gutter spaces based on the provided arguments
 *
 * @example
 *  getGutterSpaces({xs: true, sm: false, md: false, ...}, [30, {xs: 10, md: 20}], 0, 0) -> [30, 10]
 *
 * @param {UseScreenBreakpoints} screen - The useBreakpoint hook value.
 * @param {Gutter} gutter - Gutter tuple, first arg = vertical spacingm second arg = hortzontal spacing. e.g: 30, [30], [30, 20], [30, {xs: 10, md: 20}], [{xs: 10, md: 20}, {xs: 10, md: 20}]
 * @param {number | IBreakpointProps} v - Vertical spacing arg, object when used for recursion
 * @param {number | IBreakpointProps} h - Horizontal spacing arg, object when used for recursion
 * @returns tuple with vertical and/or horizontal spacing: e.g: [30, 20]
 */
export const getGutterSpaces = (
  screen: UseScreenBreakpoints,
  gutter: Gutter | [Gutter, Gutter?],
  v: Gutter = 0,
  h: Gutter = 0
): [number, number] => {
  let vSpace = v;
  let hSpace = h;

  //TODO always transform to array to reduce code?

  if (Array.isArray(gutter)) {
    [vSpace, hSpace = 0] = gutter;

    if (gutter.length === 1 && isObject(vSpace)) {
      const res = getGutterSpaces(screen, vSpace, hSpace, vSpace);

      return [res[1], res[1]];
    }

    if (isObject(vSpace) && !isObject(hSpace)) {
      // reverse because the gutter function below is based on the hSpace property
      return getGutterSpaces(screen, vSpace, hSpace, vSpace).reverse() as [number, number];
    }

    if (!isObject(vSpace) && isObject(hSpace)) {
      return getGutterSpaces(screen, hSpace, vSpace, hSpace);
    }

    if (isObject(vSpace) && isObject(hSpace)) {
      vSpace = getGutterSpaces(screen, vSpace, 0, 0)[1];
      hSpace = getGutterSpaces(screen, hSpace, 0, 0)[1];

      return [vSpace, hSpace];
    }
    if (gutter.length === 1 && !hSpace) {
      hSpace = vSpace;
    }
  }
  if (typeof gutter === "number" && !isNaN(Number(gutter))) {
    hSpace = gutter;
  }
  if (typeof gutter === "object" && isObject(gutter)) {
    gutter = gutter as Partial<Record<BreakpointList, number>>;

    const currentScreen = getCurrentScreen(screen);
    const gutterHasView = gutter[currentScreen];

    if (typeof gutterHasView === "number" && gutterHasView >= 0) {
      hSpace = gutterHasView;
    } else if (currentScreen) {
      const firstPrevBreakpoint = getFirstPrevBreakpoint(gutter, currentScreen);

      if (typeof firstPrevBreakpoint === "number" && firstPrevBreakpoint >= 0) {
        hSpace = firstPrevBreakpoint;
      }
    }
  }

  if (typeof vSpace === "number" && typeof hSpace === "number") {
    return [vSpace, hSpace];
  }

  return [0, 0];
};
