import React from 'react';
import { HoverEffectBox, Item } from './styles';

const number = [8, 7, 6, 5, 4, 3, 2, 1];

export const HoverEffect = () => {
  const rendering = () => {
    const result = [];
    for (let i = 0; i < number.length; i++) {
      result.push(<Item key={i} num={number[i]}></Item>);
    }
    return result;
  };
  return (
    <HoverEffectBox>
      <div className="container">
        <div className="loader">{rendering()}</div>
      </div>
    </HoverEffectBox>
  );
};
