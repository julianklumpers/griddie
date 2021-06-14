import React from "react";

import "./Slider.scss";

interface ISliderProps {
  title: string | React.ReactNode;
  sliderValue: number;
  onChange(value: number, event: React.ChangeEvent<HTMLInputElement>): void;
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
}

export const Slider: React.FC<ISliderProps> = ({ title, sliderValue = 0, onChange, min = 0, max = 60, step = 2, unit = "px" }) => {
  const slideThumbValueOffset = ((sliderValue - min) / (max - min)) * 100;

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onChange(Number(value), event);
  };

  return (
    <div className="slider">
      <label className="slider__label">
        <span>{title}</span>
        <span>
          {max} {unit}
        </span>
      </label>
      <div className="slider__container">
        <small
          className="slider__thumb-value"
          style={{
            left: `${slideThumbValueOffset}%`,
            transform: `translateX(-${slideThumbValueOffset}%)`,
          }}
        >
          {sliderValue}
        </small>
        <input type="range" onChange={handleOnChange} value={sliderValue} min={min} max={max} step={step} />
      </div>
    </div>
  );
};
