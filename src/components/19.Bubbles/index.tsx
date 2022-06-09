import React from "react";
import { BubblesBox, Item } from "./styles";

const number = [
  11, 12, 24, 10, 14, 23, 18, 16, 19, 20, 22, 25, 18, 21, 15, 13, 26, 17, 13,
  28, 11, 12, 24, 10, 14, 23, 18, 16, 19, 20, 22, 25, 18, 21, 15, 13, 26, 17,
  13, 28,
];

export const Bubbles = () => {
  const rendering = () => {
    const result = [];
    for (let i = 0; i < number.length; i++) {
      result.push(<Item key={i} num={number[i]}></Item>);
    }
    return result;
  };
  return (
    <BubblesBox>
      <div className="container">
        <div className="bublles">{rendering()}</div>
      </div>
    </BubblesBox>
  );
};
