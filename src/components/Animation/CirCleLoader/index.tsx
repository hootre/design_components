import React from "react";
import { CircleLoaderBox } from "./styles";

export const CircleLoader = () => {
  return (
    <CircleLoaderBox>
      <div className="loader">
        <div className="circle"></div>

        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
      </div>
    </CircleLoaderBox>
  );
};
