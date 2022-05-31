import React from "react";
import { GlowingButtonBox, Item } from "./styles";

const clr = ["#1e9bff", "#ff1867", "#6eff3e"];

export const GlowingButton = () => {
  const rendering = () => {
    const result = [];
    for (let i = 0; i < clr.length; i++) {
      result.push(
        <Item key={i} color={clr[i]}>
          <span>Button</span>
          <i></i>
        </Item>
      );
    }
    return result;
  };

  return (
    <GlowingButtonBox>
      <div className="container">{rendering()}</div>
    </GlowingButtonBox>
  );
};
