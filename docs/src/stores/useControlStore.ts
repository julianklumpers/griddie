import { createImmerStore } from "../lib/createImmerStore";
import { IContainerProps, IRowProps, IColumnProps } from "@zerodp/griddie";

type GridOptions = Partial<Pick<IStore, "container" | "row" | "column">>;
type IStore = {
  container: IContainerProps;
  row: IRowProps;
  column: IColumnProps;
  columnCount: number;
  resetGrid(): void;
  setColumnCount(cols: number): number;
  setGridProps(gridProps: GridOptions): void;
};

const iniitialState = {
  container: {},
  row: {},
  column: {},
  columnCount: 1,
};

export const useControlStore = createImmerStore<IStore>((set) => ({
  ...iniitialState,
  resetGrid: () => set((state) => iniitialState),
  setColumnCount: (cols) => {
    set((state) => {
      state.columnCount = cols;
    });

    return cols;
  },
  setGridProps: (gridProps) => {
    set((state) => {
      if (gridProps.container) {
        state.container = {
          ...state.container,
          ...gridProps.container,
        };
      }
      if (gridProps.row) {
        state.row = {
          ...state.row,
          ...gridProps.row,
        };
      }
      if (gridProps.column) {
        state.column = {
          ...state.column,
          ...gridProps.column,
        };
      }
    });
  },
}));
