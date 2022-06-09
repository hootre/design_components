import React from 'react';
import { CircularProgressBox, Item } from './styles';

const color = ['#04fc43', '#fee', '#ff00be', '#06ccff'];
const number = [85, 95, 70, 63];
const text = ['html', 'css', 'javascript', 'potoshop'];

export const CircularProgress = () => {
  const rendering = () => {
    const result = [];
    for (let i = 0; i < color.length; i++) {
      result.push(
        <Item key={i} clr={color[i]} num={number[i]}>
          <div className="percent">
            <div className="dot"></div>
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div className="number">
              <h2>
                {number[i]}
                <span>%</span>
              </h2>
              <p>{text[i]}</p>
            </div>
          </div>
        </Item>,
      );
    }
    return result;
  };
  return (
    <CircularProgressBox>
      <div className="container">{rendering()}</div>
    </CircularProgressBox>
  );
};
