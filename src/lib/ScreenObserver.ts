import { breakpointsMap } from "../constants";
import type { ScreenBreakpoints } from "../types";

type ObserveFunc = (screens: ScreenBreakpoints) => void;

class ScreenObserver {
  observers: Map<number, ObserveFunc>;
  uuid: number;
  screens: ScreenBreakpoints;
  handlers: {
    [key: string]: {
      mql: MediaQueryList;
      listener: (this: MediaQueryList, event: MediaQueryListEvent) => any;
    };
  };

  constructor() {
    this.observers = new Map();
    this.uuid = 0;
    this.screens = {};
    this.handlers = {};
  }

  public observe(fn: ObserveFunc) {
    if (!this.observers.size) {
      this.registerHandlers();
    }

    this.uuid += 1;
    this.observers.set(this.uuid, fn);

    fn(this.screens);

    return this.uuid;
  }

  public unobserve(uuid: number) {
    this.observers.delete(uuid);

    if (!this.observers.size) {
      this.unregisterHandlers();
    }
  }

  private dispatch(_screens: ScreenBreakpoints) {
    this.screens = _screens;

    if (this.observers.size > 0 && this.validate()) {
      this.observers.forEach((fn) => fn(this.screens));
    }
  }

  private validate() {
    const isUnique = Object.values(this.screens).reduce((acc, cur) => {
      if (cur) return acc + 1;
      return acc;
    }, 0);
    return isUnique === 1;
  }

  private registerHandlers() {
    Object.entries(breakpointsMap.exact).forEach(([bp, mediaQuery]) => {
      const mql = window.matchMedia(mediaQuery);

      const listener = (e: MediaQueryList | MediaQueryListEvent) => this.dispatch({ ...this.screens, [bp]: e.matches });

      mql.addEventListener("change", listener);

      this.handlers[mediaQuery] = {
        mql,
        listener,
      };

      listener(mql);
    });
  }

  private unregisterHandlers() {
    Object.values(this.handlers).forEach((handler) => {
      const { mql, listener } = handler;
      mql.removeEventListener("change", listener);
    });

    this.observers.clear();
  }
}

export default new ScreenObserver();
