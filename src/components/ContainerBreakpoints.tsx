import React from "react";
import { useBreakpoint } from "../hooks/useBreakpoint";

const ContainerBreakpointsContext = React.createContext({});

interface IContainerBreakpoints {
  xs: number[];
  sm: number[];
  md: number[];
  lg: number[];
  xl: number[];
  xxl: number[];
  children: React.ReactChild;
}

const isMutableRefObject = <T extends Element>(ref: React.ForwardedRef<T>): ref is React.RefObject<T> | React.MutableRefObject<T> => {
  return ref != null && "current" in ref;
};

const ContainerBreakpoints = React.forwardRef<HTMLDivElement, IContainerBreakpoints>(({ xs, sm, md, lg, xl, xxl, children }, ref) => {
  let containerRef = ref;

  if (!isMutableRefObject<HTMLDivElement>(containerRef)) {
    containerRef = React.useRef<HTMLDivElement>(null);
  }

  const containerBreakpoints = { xs, sm, md, lg, xl, xxl };

  const screen = useBreakpoint(containerRef, containerBreakpoints);

  const ctxValue = React.useMemo(() => ({ screen, containerBreakpoints }), [screen, containerBreakpoints]);

  return (
    <ContainerBreakpointsContext.Provider value={ctxValue}>
      <div ref={containerRef}>{children}</div>
    </ContainerBreakpointsContext.Provider>
  );
});

export { ContainerBreakpointsContext };
export default ContainerBreakpoints;
