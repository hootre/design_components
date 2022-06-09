import { Icon } from "@mui/material";
import React, { useCallback, useState, VFC } from "react";
import { DotsMenuBox, MenuItem } from "./styles";

const menuItemPosition = {
  l: 9,
  x: [-1, 1, 0, 0, 1, -1, 0, -1, 1],
  y: [0, 0, -1, 1, 1, -1, 0, 1, -1],
};
const itemList = [
  "home",
  "person",
  "settings",
  "email",
  "videocam",
  "vpn_key",
  "sports_esports",
  "photo_camera",
  "favorite_border",
];
export const DotsMenu: VFC = () => {
  const [dotsState, setDotsState] = useState(false);
  // menu on/off
  const onToggleActive = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      setDotsState((prev) => !prev);
    },
    [dotsState]
  );
  // span tag create
  const rendering = () => {
    const result = [];
    for (let i = 0; i < menuItemPosition.l; i++) {
      result.push(
        <MenuItem
          key={i}
          className={dotsState ? "navActive" : ""}
          i={i}
          x={menuItemPosition.x[i]}
          y={menuItemPosition.y[i]}
        >
          <Icon baseClassName="material-icons-outlined">{itemList[i]}</Icon>
        </MenuItem>
      );
    }
    return result;
  };
  return (
    <DotsMenuBox>
      <div
        className={dotsState ? "navigation active" : "navigation"}
        onClick={onToggleActive}
      >
        {rendering()}
      </div>
    </DotsMenuBox>
  );
};
