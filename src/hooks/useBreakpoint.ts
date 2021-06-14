/// <reference types="resize-observer-browser" />

import React from "react";
import ScreenObserver from "../lib/ScreenObserver";

import type { UseScreenBreakpoints } from "../types";

const getContainerBreakpoints = (contentRect: DOMRectReadOnly, containerBreakpoints: Record<string, number[]>) => {
  const { width } = contentRect;
  const breakpoints = Object.entries(containerBreakpoints);

  const containerScreen: any = {};

  for (let idx = 0; idx < breakpoints.length; idx++) {
    const prev = breakpoints?.[idx - 1]?.[1][0];
    const next = breakpoints?.[idx + 1]?.[1][0];
    const cur = breakpoints[idx][1][0];

    containerScreen[breakpoints[idx][0]] = false;

    if (prev && cur && width > prev && width <= cur) {
      containerScreen[breakpoints[idx][0]] = true;
    }

    if (!prev && width <= cur) {
      containerScreen[breakpoints[idx][0]] = true;
    }

    if (!next && width >= cur) {
      containerScreen[breakpoints[idx][0]] = true;
    }
  }

  return containerScreen;
};

export const useBreakpoint = (container?: React.RefObject<HTMLDivElement>, containerBreakpoints?: Record<string, number[]>) => {
  const [screens, setScreens] = React.useState<UseScreenBreakpoints>({});
  const prevScreens = React.useRef(screens);

  React.useEffect(() => {
    if (container?.current && containerBreakpoints) {
      let resizeObserver: ResizeObserver;

      resizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]) => {
        const containerScreens = getContainerBreakpoints(entries[0].contentRect, containerBreakpoints);

        if (JSON.stringify(prevScreens.current) !== JSON.stringify(containerScreens)) {
          setScreens(containerScreens);
          prevScreens.current = containerScreens;
        }
      });

      resizeObserver.observe(container.current);

      return () => {
        if (container.current) {
          resizeObserver.unobserve(container.current);
        }
      };
    } else {
      const observer = ScreenObserver.observe(setScreens);

      return () => {
        ScreenObserver.unobserve(observer);
      };
    }
  }, []);

  return screens;
};
