import React from "react";
import { useControlStore } from "@stores/useControlStore";
import { Checkbox } from "@components";

const breakpoints = ["xs", "sm", "md", "lg", "xl", "xxl"] as const;

export const Fluid = () => {
  const { container, setGridProps } = useControlStore((state) => state);

  return (
    <div className="control-group">
      <h3 className="control-group__title">Container</h3>

      <div className="form-group">
        <Checkbox
          title="Fluid"
          position="right"
          checked={!!container.fluid}
          onChange={() => {
            setGridProps({ container: { fluid: !container.fluid } });
          }}
        />
        <span style={{ margin: "0 5px" }}>-</span>
        {breakpoints.map((bp) => (
          <Checkbox
            key={`bp-${bp}`}
            htmlFor={`checkbox-fluid-${bp}`}
            position="right"
            title={bp}
            checked={!!container[bp]}
            disabled={!container.fluid}
            onChange={() => {
              setGridProps({ container: { [bp]: !container[bp] } });
            }}
          />
        ))}
      </div>
    </div>
  );
};
