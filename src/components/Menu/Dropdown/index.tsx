import { InsertEmoticon } from "@mui/icons-material";
import { Icon } from "@mui/material";
import React from "react";
import { DropdownBox } from "./styles";
const itemList = ["home", "person", "settings", "email", "videocam"];
export const Dropdown = () => {
  return (
    <DropdownBox>
      <div className="dropdown">
        <span className="label">
          <Icon className="icon" baseClassName="material-icons-outlined">
            {itemList[0]}
          </Icon>
        </span>
        <ul className="items">
          {itemList.map((item) => {
            return (
              <li>
                <a href="#">
                  <Icon
                    className="icon"
                    baseClassName="material-icons-outlined"
                  >
                    {item}
                  </Icon>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </DropdownBox>
  );
};
