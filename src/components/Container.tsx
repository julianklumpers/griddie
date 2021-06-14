import React from "react";
import { IConfigDefaults } from "../types";
import { useBreakpoint } from "../hooks/useBreakpoint";
import { getGridOptions } from "../config";
import { getCurrentScreen } from "../utils/helpers";
import { getContainerStyles } from "../utils";
import { ContainerBreakpointsContext } from "./ContainerBreakpoints";
import type { ScreenBreakpoints } from "../types";

const ContainerContext = React.createContext({});

type ContainerConfig = IConfigDefaults["container"];
export interface IContainerProps extends ScreenBreakpoints, React.HTMLAttributes<HTMLDivElement> {
  fluid?: boolean;
  style?: React.CSSProperties;
}

const Container: React.FC<IContainerProps> = ({ fluid = false, xs, sm, md, lg, xl, xxl, style, children, className, ...props }) => {
  let { screen, containerBreakpoints } = React.useContext(ContainerBreakpointsContext) as any;
  let containerWidths = getGridOptions("container").containerWidths;

  if (containerBreakpoints) {
    containerWidths = Object.entries(containerBreakpoints).reduce(
      (acc, [key, [_, val]]: any) => ({
        ...acc,
        [key]: val,
      }),
      {}
    ) as any;
  }

  if (!screen) {
    screen = useBreakpoint();
  }

  const currentScreen = React.useMemo(() => getCurrentScreen(screen), [screen]);

  // TODO use context to update the negative margin for container instead of using overflow: hidden
  const ctxValue = React.useMemo(() => ({ screen }), [screen]);

  const styles = React.useMemo(() => getContainerStyles(currentScreen, fluid, { xs, sm, md, lg, xl, xxl }, containerWidths), [
    currentScreen,
    fluid,
    xs,
    sm,
    md,
    lg,
    xl,
    xxl,
    containerWidths,
  ]);

  return (
    <ContainerContext.Provider value={ctxValue}>
      <div style={{ ...styles, ...style }} className={className} {...props}>
        {children}
      </div>
    </ContainerContext.Provider>
  );
};

export { ContainerContext };
export default Container;
