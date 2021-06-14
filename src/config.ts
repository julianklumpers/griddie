import { IConfigDefaults } from "./types";
import { configDefaults } from "./constants";

let config = configDefaults;

export const getGridOptions = <T extends keyof IConfigDefaults>(key: T): IConfigDefaults[T] => config[key];
export const setGridOptions = (newConfig: Partial<IConfigDefaults>) => {
  config = {
    ...config,
    ...newConfig,
  };
};
