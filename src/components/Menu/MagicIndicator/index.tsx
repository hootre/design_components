import React from "react";
import { MagicIndicatorBox } from "./styles";

export const MagicIndicator = () => {
  return (
    <MagicIndicatorBox>
      <div className="navigation">
        <ul>
          <li>
            <a href="#">
              <span className="text">Home</span>
            </a>
          </li>
        </ul>
      </div>
    </MagicIndicatorBox>
  );
};
