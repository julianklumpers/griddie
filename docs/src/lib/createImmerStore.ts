import create, { State, StateCreator } from "zustand";
import { devtools } from "zustand/middleware";
import produce, { Draft } from "immer";
import pipe from "ramda/es/pipe";

const immer = <T extends State>(config: StateCreator<T, (fn: (draft: Draft<T>) => void) => void>): StateCreator<T> => (
  set,
  get,
  api
) => config((fn) => set(produce<T>(fn)), get, api);

export const createImmerStore = pipe(immer, devtools, create);
