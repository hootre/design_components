import React from "react";
import "./styles";
import { SmokingBox, Item } from "./styles";

export const Smoking = () => {
  const rendering = () => {
    const result = [];
    for (let i = 0; i < 10; i++) {
      result.push(
        <Item key={i} num={i + 1}>
          <i>Noooooo</i>Smooooooooooking<i>|</i>
        </Item>
      );
    }
    return result;
  };
  return (
    <SmokingBox>
      <div className="container">
        <div className="cigarette">{rendering()}</div>
      </div>
    </SmokingBox>
  );
};
