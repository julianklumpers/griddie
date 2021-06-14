import React from "react";
import { Slider } from "../../../../components";
import { useControlStore } from "../../../../stores/useControlStore";

export const Gutters = () => {
  const { row, setGridProps } = useControlStore((state) => state);

  const { gutter: [vSpace, hSpace] = [0, 0] } = row as { gutter: [number, number] };

  const handleGutter = (type: "vertical" | "horizontal", value: number) => {
    setGridProps({
      row: {
        gutter: type === "vertical" ? [value, hSpace] : [vSpace, value],
      },
    });
  };

  return (
    <div className="control-group">
      <Slider title="Vertical" sliderValue={vSpace} onChange={(val) => handleGutter("vertical", val)} max={100} />
      <Slider title="Horizontal" sliderValue={hSpace} onChange={(val) => handleGutter("horizontal", val)} max={100} />
    </div>
  );
};
