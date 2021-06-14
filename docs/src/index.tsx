import * as React from "react";
import * as ReactDOM from "react-dom";
import { setGridOptions } from "@zerodp/griddie";

import App from "./App";

import "./reset.scss";

setGridOptions({ row: { layout: 12 } });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
