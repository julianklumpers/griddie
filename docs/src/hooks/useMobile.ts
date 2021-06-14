import { isInRangeOf, useBreakpoint } from "@zerodp/griddie";

export const useMobile = () => {
  const screen = useBreakpoint();
  return isInRangeOf(["xs", "sm"], screen);
};
