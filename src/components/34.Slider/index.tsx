import React from 'react';
import { RangeSliderBox, Item } from './styles';
import { useCallback, useState } from 'react';

export const RangeSlider = () => {
  const [value, onChange] = useState(0);

  return (
    <RangeSliderBox>
      <div className="container">
        <div className="box">
          <input
            type="range"
            className="range"
            value={value}
            min={0}
            max={100}
            onChange={({ target: { value: radius } }) => {
              onChange(radius);
            }}
          />
          <span className="rangeValue">{value}</span>
        </div>
      </div>
    </RangeSliderBox>
  );
};
