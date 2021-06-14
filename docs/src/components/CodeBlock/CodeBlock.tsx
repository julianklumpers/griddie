import React from "react";
import { IPrism } from "./Prism";

interface ICodeBlock extends IPrism {
  show?: boolean;
  showLineNumbers?: boolean;
}

const Prism = React.lazy(() => import("./Prism").then(({ Prism }) => ({ default: Prism })));

export const CodeBlock: React.FC<ICodeBlock> = ({ show = true, code, ...props }) => {
  if (!show) return null;

  return (
    <React.Suspense fallback="loading...">
      <Prism code={code} {...props} />
    </React.Suspense>
  );
};
