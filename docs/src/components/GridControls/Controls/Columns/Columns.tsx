import React from "react";
import { Slider, Select } from "@components";
import { useControlStore } from "@stores/useControlStore";

const breakpoints = ["xs", "sm", "md", "lg", "xl", "xxl"] as const;

export const Columns = () => {
  const { row, column, columnCount, setGridProps, setColumnCount } = useControlStore();

  const handleColumns = (cols: number) => {
    const newCols = setColumnCount(cols);

    setGridProps({
      column: {
        span: (row.layout || 12) / newCols,
      },
    });
  };

  const handleBreakpoint = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    const numVal = Number(value);

    setGridProps({ column: { [name]: numVal } });
  };

  return (
    <>
      <div className="control-group">
        <h3 className="control-group__title">Columns</h3>
        <Slider title="Count" sliderValue={columnCount} onChange={(e) => handleColumns(e)} min={1} max={12} step={1} unit="" />
      </div>
      <div className="control-group">
        <small>Breakpoints</small>
        <div className="form-group">
          {breakpoints.map((bp) => (
            <Select
              key={`select-${bp}-${column[bp]?.toString()}`}
              defaultValue={column[bp]?.toString()}
              onChange={handleBreakpoint}
              name={bp}
              title={bp}
            >
              <option value="">-</option>
              {Array.from({ length: row.layout || 12 }).map((_, idx) => (
                <option key={`select-opt-${bp}-${idx}`}>{idx + 1}</option>
              ))}
            </Select>
          ))}
        </div>
      </div>
    </>
  );
};
