import { createImmerStore } from "../lib/createImmerStore";

type IStore = {
  isOpen: boolean;
  toggle(): void;
  closeMenu(): void;
};

const iniitialState = {
  isOpen: false,
};

export const useMenuStore = createImmerStore<IStore>((set) => ({
  ...iniitialState,
  toggle: () =>
    set((state) => {
      state.isOpen = !state.isOpen;
    }),
  closeMenu: () =>
    set((state) => {
      state.isOpen = false;
    }),
}));
