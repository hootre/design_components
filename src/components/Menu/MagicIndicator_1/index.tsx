import { Icon } from "@mui/material";
import React, { useCallback, useState, VFC } from "react";
import { ListItem, MagicIndicatorBox } from "./styles";
const itemList = ["home", "person", "settings", "email", "videocam"];
export const MagicIndicator_1: VFC = () => {
  const [navItmeActiveState, setItmeActiveState] = useState(0);
  const onToggleNavItemActive = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      setItmeActiveState(e.currentTarget.id);
    },
    [navItmeActiveState]
  );
  return (
    <MagicIndicatorBox>
      <div className="navigation">
        <ul>
          {itemList.map((item, index) => {
            return (
              <ListItem
                key={index}
                id={"" + index}
                className={navItmeActiveState == index ? "active" : ""}
                onClick={onToggleNavItemActive}
              >
                <a href="#">
                  <Icon
                    className="icon"
                    baseClassName="material-icons-outlined"
                  >
                    {itemList[index]}
                  </Icon>
                  <span className="text">{itemList[index]}</span>
                </a>
              </ListItem>
            );
          })}
          <div className="indicator"></div>
        </ul>
      </div>
    </MagicIndicatorBox>
  );
};
