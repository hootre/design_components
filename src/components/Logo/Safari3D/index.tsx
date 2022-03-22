import React from "react";
import { CircleLine, Safari3DBox } from "./styles";

export default function Safari3D() {
  const rendering = () => {
    const result = [];
    for (let i = 0; i < 36; i++) {
      result.push(<CircleLine num={i}></CircleLine>);
    }
    return result;
  };
  return (
    <Safari3DBox>
      <div className="safari">
        <div className="circle_lines">{rendering()}</div>
        <div className="niddle"></div>
      </div>
    </Safari3DBox>
  );
}
