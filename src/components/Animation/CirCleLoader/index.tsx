import React from "react";
import { CirCleLoaderBox } from "./styles";

export const CirCleLoader = () => {
  return (
    <CirCleLoaderBox>
      <div className="loader">
        <div className="circle"></div>

        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
      </div>
    </CirCleLoaderBox>
  );
};
